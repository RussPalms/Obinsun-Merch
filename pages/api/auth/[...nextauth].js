import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { getProviders } from "next-auth/react";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import { firebaseConfig } from "../../firebase";
// import firebase from "firebase/app";
// import "firebase/firestore";

// import { db } from "../../../firebase";
// import { compare } from "bcryptjs";
// import { useSelector } from "react-redux";

import { verifyPassword } from "../../library/authentication";
// import { connectToFirebase } from "../../library/database";
import { databaseConnect } from "../../library/database";
// import { firebaseApp } from "../../library/database";
// import { databaseConnect } from "../../library/database/connectToFirebase";

// import firebase from "firebase/app"
// import "firebase/firestore"

// const firestore = (
//   firebase.apps[0] ?? firebase.initializeApp(/* your config */)
// ).firestore()

export default NextAuth({
	//Configure JWT
	session: {
		strategy: "jwt",
	},
	//Specify Provider
	providers: [
		CredentialsProvider({
			// providers,
			// id: "CredentialsProvider",
			// name: "Credentials",
			// type: "credentials",
			// credentials: {
			// 	email: {
			// 		label: "Email",
			// 		type: "email",
			// 		placeholder: "youremail@provider.com",
			// 	},
			// 	password: { label: "Password", type: "password" },
			// },
			// async authorize(credentials) {
			authorize: async (credentials, req) => {
				//Get all the users
				// const users = await db().collection("users");
				//Find user with the email
				// .doc(user.uid).get().collection('email')
				// const client = await connectToFirebase().databaseConnect();
				const client = await databaseConnect;

				const firestoreCollection = client.collection();

				const user = await firestoreCollection("users")
					// .doc("email")
					// .doc(credentials.email)
					.where(
						"email",
						// credentials.email,
						"==",
						credentials.email
						// { email: credentials.email }
					);
				// .get();
				// .then(function (querySnapshot) {
				// 	querySnapshot.forEach(function (doc) {
				// 		return doc.id, ":", doc.data();
				// 	});
				// });

				// const result = await users.once("value", (snapshot) => {
				// 	email: credentials.email;
				// });
				//Not found - send error res
				// if (!result) {
				// 	throw new Error("No user found with the email");
				// }

				if (!user) {
					throw new Error("No user found!");
				}

				//Check hashed password with DB password
				// const checkPassword = await compare(
				// 	credentials.password,
				// 	result.password
				// );
				//Incorrect password - send response
				// if (!checkPassword) {
				// 	client.close();
				// 	throw new Error("Password doesnt match");
				// }
				//Else send success response
				// return { email: result.email };

				const isValid = await verifyPassword(
					credentials.password,
					user.password
				);

				if (!isValid) {
					// client.terminate();
					throw new Error("Could not log you in!");
				}

				// client.terminate();
				return { email: user.email };
				// return user;
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
	adapter: FirebaseAdapter({ databaseConnect }),
	// pages: {
	// 	signIn: "../authenticate",
	// },
});

// export async function getServerSideProps() {
// 	const providers = await getProviders();

// 	return {
// 		props: {
// 			providers,
// 		},
// 	};
// }
