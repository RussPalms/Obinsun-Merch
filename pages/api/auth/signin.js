import { useState } from "react";
import { hashPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";
// import { databaseConnect } from "../../library/database";
// import { databaseConnect } from "../../library/database";
// import { databaseConnect } from "../../library/database/connectToFirebase";
// import * as admin from "firebase-admin";

// const serviceAccount = require("../../../permissions.json");

// const firebaseAdmin = !admin.apps.length
// 	? admin.initializeApp({
// 			credential: admin.credential.cert(serviceAccount),
// 	  })
// 	: admin.app();

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const {
// 	getFirestore,
// 	Timestamp,
// 	FieldValue,
// } = require("firebase-admin/firestore");

// async function initializeAppWithProjectId() {
// [START firestore_setup_client_create]
// const admin = require('firebase-admin');

// initializeApp({
// The `projectId` parameter is optional and represents which project the
// client will act on behalf of. If not supplied, it falls back to the default
// project inferred from the environment.
//   projectId: process.env.FIREBASE_PROJECT_ID,
// });
// const db = getFirestore();
// [END firestore_setup_client_create]
// 	return db;
//   }

async function handler(req, res) {
	// const [userDetails, setUserDetails] = useState("");

	if (req.method !== "POST") {
		return;
	}

	const data = req.body;

	const { email, password } = data;

	if (
		!email ||
		!email.includes("@") ||
		!password ||
		password.trim().length < 7
	) {
		res.status(422).json({
			message:
				"Invalid input - password should also be at least 7 characters long.",
		});
		return;
	}

	// const adminInstance = firebaseAdmin.firestore();
	// const client = adminInstance();
	// const client = await databaseConnect;
	const client = await connectToFirebase();
	// const client = await adminInstance;
	// const client = await databaseConnect;
	const db = client;

	const existingUser = await db
		.collection("users")
		// .doc("email")
		.where("email", "==", email)
		// .doc()
		// .where({ email: email })
		.get()
		.then(function (querySnapshot) {
			// querySnapshot.forEach(function (doc) {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			if (!querySnapshot.empty) {
				return true;
			} else return false;
		});
	// });
	// .catch((err) => {
	// 	res.status(422).json({ message: "User already exists!" });
	// });
	// .catch(function (error) {
	// 	console.log("Error getting documents: ", error);
	// })
	if (existingUser) {
		res.status(422).json({ message: "User already exists!" });
		// client.terminate();
		return;
	}

	const hashedPassword = await hashPassword(password);

	const result = await db
		.collection("users")
		// .doc()
		// .doc(email)
		// .set({
		// 	email: email,
		// 	password: hashedPassword,
		// });
		.add({
			email: email,
			password: hashedPassword,
		});

	// const getUser = await db
	// 	// .collection(`users/${email}`)
	// 	.collection("users")
	// 	// .doc()
	// 	// .where("email", "=", email)
	// 	.doc(email)
	// 	.get()

	// 	.then((snapshot) => console.log(snapshot.data()));
	// console.log(getUser);
	// console.lot(userDetails);

	// .then(function (querySnapshot) {
	// 	return querySnapshot.docs.map((doc) => {
	// 		Object.assign(doc.data(), {
	// 			id: doc.id,
	// 		});
	// 	});
	// });

	// .then((querySnapshot) => {
	// 	if (querySnapshot.empty) {
	// 		res.send("user not created");
	// 	} else {
	// 		var userDocs = querySnapshot.docs.map((doc) => doc.data());
	// 		console.log("User document data: ", userDocs);
	// 	}
	// 	// res.end(
	// 	// 	JSON.stringify({
	// 	// 		email: email,
	// 	// 		password: password,
	// 	// 	})
	// 	// );
	// });

	// .then(console.log(data))
	// console.log(data);

	res.status(201).json({ message: "Created user!" });

	// client.terminate();
}

export default handler;
