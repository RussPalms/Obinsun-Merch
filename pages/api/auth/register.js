import { hashPassword } from "../library/authentication";
// import { connectToFirebase } from "../library/database";
// import { databaseConnect } from "../library/database";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../permissions.json");

const firebaseAdmin = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
	  })
	: admin.app();

async function handler(req, res) {
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

	const adminInstance = firebaseAdmin.firestore();
	// const adminInstance = connectDatabase();
	const client = await adminInstance();
	// const client = await databaseConnect();
	const db = client;

	const existingUser = await db
		.collection("users")
		// .where("email", "==", email)
		.doc()
		.where({ email: email })
		.get()
		.then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				return true;
			});
		})
		.catch(function (error) {
			console.log("Error getting documents: ", error);
		});

	if (existingUser) {
		res.status(422).json({ message: "User already exists!" });
		// client.close();
		return;
	}

	const hashedPassword = await hashPassword(password);

	const result = await db
		.collection("users")
		.doc()
		.set({
			email: email,
			password: hashedPassword,
		})
		.then(() => res.status(201).json({ message: "Created user!" }));

	// client.close();
}

export default handler;
