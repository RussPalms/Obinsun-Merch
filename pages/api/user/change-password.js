import { getSession } from "next-auth/react";

import { hashPassword, verifyPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";

async function passwordHandler(req, res) {
	if (req.method !== "PATCH") {
		return;
	}

	const session = await getSession({ req: req });

	if (!session) {
		res.status(401).json({ message: "Not authenticated!" });
		return;
	}

	const userEmail = session.user.email;
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;

	const client = await connectToFirebase();

	const usersCollection = client.collection("users");

	const user = await usersCollection
		.where("email", "==", userEmail)
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

	if (!user) {
		res.status(404).json({ message: "User not found." });
		return;
	}

	const currentPassword = user.password;

	const passwordsAreEqual = await verifyPassword(
		oldPassword,
		currentPassword
	);

	if (!passwordsAreEqual) {
		res.status(403).json({ message: "Invalid password." });
		return;
	}

	const hashedPassword = await hashPassword(newPassword);

	const result = await usersCollection.doc(user._id).update({
		email: userEmail,
		password: hashedPassword,
	});

	res.status(200).json({ message: "Password updated!" });
}

export default passwordHandler;
