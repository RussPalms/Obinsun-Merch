import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// import { firebaseConfig } from "../../firebase";
import firebaseConfig from "../../firebase";

// export async function connectToFirebase() {
// const client = await MongoClient.connect(process.env.MONGO_URI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

// const firebaseConfig = {
// 	apiKey: process.env.FIREBASE_API_KEY,
// 	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 	projectId: process.env.FIREBASE_PROJECT_ID,
// 	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// 	appId: process.env.FIREBASE_APP_ID,
// };

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

// const db = app.firestore();
// const storage = firebase.storage();

const databaseConnect = app.firestore();
// const databaseConnect = app
const storageConnect = firebase.storage();

// return db, storage;

// return { databaseConnect, storageConnect };
// 	return databaseConnect, storageConnect;
// }

// export { databaseConnect, storageConnect };
export { databaseConnect, storageConnect };