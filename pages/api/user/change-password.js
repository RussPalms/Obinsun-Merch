import { getSession } from "next-auth/react";

import { hashPassword, verifyPassword } from "../../library/authentication";
import { connectToFirebase } from "../../library/database";

async function handler(req, res) {
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

	// const usersCollection = client.db().collection("users");

	// const usersCollection = client.db().collection("users").doc(userEmail);
	const usersCollection = client.collection("users");
	// .doc(userEmail)
	// const user = await usersCollection.findOne({ email: userEmail });

	// const user = await usersCollection.get();
	// const userRef = await user.where("email", "==", userEmail);

	const user = await usersCollection
		// .doc()
		.where("email", "==", userEmail)
		.get()
		.then((query) => {
			// console.log(query.data());

			let data = query.docs.map((doc) => {
				let x = doc.data();
				x["_id"] = doc.id;
				return x;
			});

			const userData = data[0];

			return userData;
		});
	console.log(user);

	if (!user) {
		res.status(404).json({ message: "User not found." });
		// client.close();
		return;
	}

	// if (userRef.empty) {
	// 	res.status(404).json({ message: "User not found." });
	// 	client.terminate();
	// 	return;
	// }

	const currentPassword = user.password;

	const passwordsAreEqual = await verifyPassword(
		oldPassword,
		currentPassword
	);

	if (!passwordsAreEqual) {
		res.status(403).json({ message: "Invalid password." });
		// client.terminate();
		// client.close();
		return;
	}

	const hashedPassword = await hashPassword(newPassword);

	// const result = await usersCollection.updateOne(
	// 	{ email: userEmail },
	// 	{ $set: { password: hashedPassword } }
	// );

	// const result = await usersCollection;
	// await result.update({ email: userEmail, password: hashedPassword });

	const result = await usersCollection.doc(user._id).update({
		email: userEmail,
		password: hashedPassword,
	});

	// client.terminate();
	// client.close();
	res.status(200).json({ message: "Password updated!" });
}

export default handler;
