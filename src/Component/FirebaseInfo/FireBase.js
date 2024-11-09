// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLiH4psZbwtiT-6r3ZX2aWHUMu1PtMU-M",
  authDomain: "simple-firebase-learn-66ecf.firebaseapp.com",
  projectId: "simple-firebase-learn-66ecf",
  storageBucket: "simple-firebase-learn-66ecf.firebasestorage.app",
  messagingSenderId: "714729889809",
  appId: "1:714729889809:web:0684748a58b42f722351b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
