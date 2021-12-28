import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore';

// import * as firebase from 'firebase'

// import { firebaseConfig } from "../../firebase";
import { firebaseConfig } from "../../firebase";

// export async function connectToFirebase() {
// const app = initializeApp(firebaseConfig);
// const db = await getFirestore(app);
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

// const db = app.firestore();
// const storage = firebase.storage();

const databaseConnect = app.firestore();
// const databaseConnect = app
const storageConnect = firebase.storage();

// return;
// }

export { databaseConnect, storageConnect };
