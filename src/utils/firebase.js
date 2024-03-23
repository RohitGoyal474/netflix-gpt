// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC11d_jb-tn32itK5N0rdK1E5it4Vtj-Us",
  authDomain: "netflixgpt-60854.firebaseapp.com",
  projectId: "netflixgpt-60854",
  storageBucket: "netflixgpt-60854.appspot.com",
  messagingSenderId: "259569438096",
  appId: "1:259569438096:web:0d8c9a054ec8d2ad2d7715",
  measurementId: "G-JTRVJJ7Y36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
