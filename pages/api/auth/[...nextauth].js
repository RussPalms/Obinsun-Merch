import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";

export default NextAuth({
	//Configure JWT
	session: {
		strategy: "jwt",
	},
	//Specify Provider
	providers: [
		CredentialsProvider({
			authorize: async (credentials, req) => {
				const client = await connectToFirebase();

				const firestoreCollection = client.collection("users");

				const user = await firestoreCollection
					.where("email", "==", credentials.email)
					.get()

					.then((query) => {
						let data = query.docs.map((doc) => {
							let x = doc.data();
							x["_id"] = doc.id;
							return x;
						});

						const userData = data[0];

						return userData;
					});

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					throw new Error("Could not log you in!");
				}

				return { email: user.email };
			},
		}),
	],
	callbacks: {
		// async signIn({ user, account, profile, email, credentials }) {
		// 	const isAllowedToSignIn = true;
		// 	if (isAllowedToSignIn) {
		// 		return true;
		// 	} else {
		// 		// Return false to display a default error message
		// 		return false;
		// 		// Or you can return a URL to redirect to:
		// 		// return '/unauthorized'
		// 	}
		// },
		// jwt: ({ token, user }) => {
		// 	// first time jwt callback runs, user object is available
		// 	if (user) {
		// 		// token.id = user.id;
		// 		token.id = user.id;
		// 	}
		// 	return token;
		// },
		// session: ({ session, token }) => {
		// 	if (token) {
		// 		session.id = token.id;
		// 	}
		// 	return session;
		// },
	},
	secret: process.env.NEXTAUTH_SECRET,
	// jwt: {
	// 	secret: process.env.NEXTAUTH_SECRET,
	// 	entryption: true,
	// },
	// adapter: FirebaseAdapter({ databaseConnect }),
	// pages: {
	// 	signIn: "../authenticate",
	// },
});
