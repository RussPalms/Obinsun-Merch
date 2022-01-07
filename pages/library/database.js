import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore';

// import * as firebase from 'firebase'

// import { firebaseConfig } from "../../firebase";
import { firebaseConfig } from "../../firebase";

export async function connectToFirebase() {
	// const app = initializeApp(firebaseConfig);
	// const db = await getFirestore(app);
	const app = !firebase.apps.length
		? firebase.initializeApp(firebaseConfig)
		: firebase.app();

	// const db = app.firestore();
	// const storage = firebase.storage();

	const databaseConnect = await app.firestore();
	// const databaseConnect = app
	const storageConnect = firebase.storage();

	return databaseConnect;
}

// export { databaseConnect, storageConnect };

// import { Firestore } from "@google-cloud/firestore";

// export const db = new Firestore({
// 	projectId: process.env.PROJECT_ID,
// 	keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
// });
