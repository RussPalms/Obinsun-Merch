import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { firebaseConfig } from "../../firebase";

export async function connectToFirebase() {
	const app = !firebase.apps.length
		? firebase.initializeApp(firebaseConfig)
		: firebase.app();

	const databaseConnect = await app.firestore();
	// const storageConnect = firebase.storage();

	return databaseConnect;
}
