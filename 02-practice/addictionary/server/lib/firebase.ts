import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9hhbOqFItffHTSQ6XW0h6Cft0_NC5WvQ",
  authDomain: "addictionary-7b26a.firebaseapp.com",
  projectId: "addictionary-7b26a",
  storageBucket: "addictionary-7b26a.appspot.com",
  messagingSenderId: "878462327671",
  appId: "1:878462327671:web:e174e819520a2841d09f72",
  measurementId: "G-MEJHW175FX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
// export const firebaseAnalytics = getAnalytics(firebaseApp);