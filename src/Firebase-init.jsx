// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2ftH701nfRl6BjPeaE6zLgfF9r4sbR3k",
  authDomain: "email-password-authentic-2d9cb.firebaseapp.com",
  projectId: "email-password-authentic-2d9cb",
  storageBucket: "email-password-authentic-2d9cb.firebasestorage.app",
  messagingSenderId: "545888512248",
  appId: "1:545888512248:web:affc2c448c39991c3df30d",
  measurementId: "G-4HVKWTGWQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth