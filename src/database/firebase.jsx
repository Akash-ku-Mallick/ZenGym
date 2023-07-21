// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA3KVTShGm_lbVlvudM8VRgGwn473yWa8U",
  authDomain: "zengym-project.firebaseapp.com",
  projectId: "zengym-project",
  storageBucket: "zengym-project.appspot.com",
  messagingSenderId: "942933006455",
  appId: "1:942933006455:web:83eabedcb5b60078a8ce72",
  measurementId: "G-66LEN7LMC6"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);
const AuthApp = getAuth(App);
const db = getFirestore(App);


export { AuthApp, App, db };

