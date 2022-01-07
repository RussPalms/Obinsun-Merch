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
import { connectToFirebase } from "../../library/database";
// import { databaseConnect } from "../../library/database";
// import { databaseConnect } from "../../library/database";
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
				// console.log(credentials.email);
				//Get all the users
				// const users = await db().collection("users");
				//Find user with the email
				// .doc(user.uid).get().collection('email')
				const client = await connectToFirebase();
				// const client = await databaseConnect;

				const firestoreCollection = client.collection("users");

				// const userRef =

				// console.log(firestoreCollection);
				const user = await firestoreCollection
					// .doc("email")
					// .doc(credentials.email)
					.where(
						"email",
						// credentials.email,
						"==",
						credentials.email
						// { email: credentials.email }
					)
					.get()

					.then((query) => {
						// console.log(query.data());
						// res.status(200).json(query);

						// let data = query.data();
						// return data;
						// console.log(data);

						let data = query.docs.map((doc) => {
							let x = doc.data();
							x["_id"] = doc.id;
							return x;
						});

						const userData = data[0];

						return userData;
						console.log(userData);
						// console.log(data[0]);
						// res.status(200).json(data[0]);

						// var docs = query.docs.map((doc) => doc.data());
						// console.log("Document data:", docs);
					});
				// console.log(userData);
				console.log(user);
				// .then(res.status(200).json(data));

				// .then(function (querySnapshot) {
				// 	return querySnapshot.docs.map((doc) =>
				// 		Object.assign(doc.data(), { email: doc.email })
				// 	);
				// });

				// .then((snapshot) => console.log(snapshot.data()));
				// .then(res.status(200).json(snapshot));

				// console.log(snapshot);
				// .then(function (querySnapshot) {
				// 	querySnapshot.forEach(function (doc) {
				// 		return doc.email, ":", doc.data();
				// 		console.log(doc.data);
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
	// adapter: FirebaseAdapter({ databaseConnect }),
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
