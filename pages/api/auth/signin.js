import { hashPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";
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

	const client = await connectToFirebase();
	const db = client;

	const existingUser = await db
		.collection("users")
		.where("email", "==", email)
		.get()
		.then(function (querySnapshot) {
			if (!querySnapshot.empty) {
				return true;
			} else return false;
		});
	if (existingUser) {
		res.status(422).json({ message: "User already exists!" });
		return;
	}

	const hashedPassword = await hashPassword(password);

	const result = await db.collection("users").add({
		email: email,
		password: hashedPassword,
	});

	res.status(201).json({ message: "Created user!" });
}

export default handler;
