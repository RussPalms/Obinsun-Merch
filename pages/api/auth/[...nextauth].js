import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import EmailProvider from "next-auth/providers/email";
import { verifyPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";
import { ac } from "../../server/services";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { getToken } from "next-auth/jwt";

// const secret = process.env.JWT_SECRET;

// async (req, res) => {
// 	const token = await getToken({ req, secret });
// 	console.log("JSON Web Token", token);
// 	res.end();
// };

export default NextAuth({
	//Configure JWT
	session: {
		strategy: "jwt",
		// strategy: "database",
	},
	//Specify Provider
	// database: process.env.FIRBASE_FIRESTORE_URL,
	// adapter: FirebaseAdapter({ connectToFirebase }).collection('users').doc().get(),
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
				// console.log(user);

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					throw new Error("Could not log you in!");
				}

				return { email: user.email, role: user.role };
			},
		}),
		// EmailProvider({
		// 	server: {
		// 		host: process.env.SMTP_HOST,
		// 		port: Number(process.env.SMTP_PORT),
		// 		auth: {
		// 			user: process.env.SMTP_USER,
		// 			pass: process.env.SMTP_PASSWORD,
		// 		},
		// 	},
		// 	from: process.env.SMTP_FROM,
		// }),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			const client = await connectToFirebase();

			const firestoreCollection = client.collection("users");

			const userToken = await firestoreCollection
				.where("email", "==", token.email)
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

			if (userToken) {
				token.id = userToken._id;
				token.role = userToken.role;
			}
			return token;
		},
		session: async ({ session, token }) => {
			if (token) {
				session.id = token.id;
				session.user.role = token.role;

				const grants = ac.getGrants();
				// expose only the current role permissions
				session.user.permissions =
					token.role in grants
						? { [token.role]: grants[token.role] }
						: {};
				return Promise.resolve(session);
			}
			return session;
		},
	},
	secret: process.env.JWT_SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
		entryption: true,
	},
	// pages: {
	// 	signIn: "../authenticate",
	// },
});
