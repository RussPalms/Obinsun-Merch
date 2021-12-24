import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

// import { db } from "../../../firebase";
// import { compare } from "bcryptjs";
// import { useSelector } from "react-redux";

import { verifyPassword } from "../library/authentication";
import { connectToFirebase } from "../../library/database";
// import { databaseConnect } from "../library/database";

export default NextAuth({
	//Configure JWT
	session: {
		strategy: "jwt",
	},
	//Specify Provider
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				//Get all the users
				// const users = await db().collection("users");
				//Find user with the email
				// .doc(user.uid).get().collection('email')
				const client = await connectToFirebase();
				// const client = await databaseConnect();

				const firestoreCollection = client.collection();

				const user = await firestoreCollection("users").doc().where(
					// "email",
					// "==",
					// credentials.email
					{ email: credentials.email }
				);

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
					// client.close();
					throw new Error("Could not log you in!");
				}

				//   client.close();
				return { email: user.email };
			},
		}),
	],
	adapter: FirebaseAdapter(connectToFirebase),
});
