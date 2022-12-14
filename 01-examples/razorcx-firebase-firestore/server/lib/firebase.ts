import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDysCAtC3gYBnigCfrWym4NeAVS1HmGZcs",
    authDomain: "razorcx-firebase.firebaseapp.com",
    projectId: "razorcx-firebase",
    storageBucket: "razorcx-firebase.appspot.com",
    messagingSenderId: "72861743372",
    appId: "1:72861743372:web:081fabd2c4bbf2f72b7129"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);