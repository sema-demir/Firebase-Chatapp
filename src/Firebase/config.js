// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBumHftf84Qniy3MCgnR4oWdonu6rOFzXc",
  authDomain: "chat-b0580.firebaseapp.com",
  projectId: "chat-b0580",
  storageBucket: "chat-b0580.appspot.com",
  messagingSenderId: "847569477523",
  appId: "1:847569477523:web:d9392109b4efde0068d266",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebasdeki auth yapısının referansını al
export const auth = getAuth(app);

// google saglayıcsının kurulumu
export const provider = new GoogleAuthProvider();
