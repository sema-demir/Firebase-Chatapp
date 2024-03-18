// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "Firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log(import.meta.env.VITE_API_KEY);
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER,
  appId: import.meta.env.VITE_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebasdeki auth yapısının referansını al
export const auth = getAuth(app);

// google saglayıcsının kurulumu
export const provider = new GoogleAuthProvider();
// veritabanın referansını alma
export const db = getFirestore(app);
