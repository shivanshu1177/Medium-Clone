// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfcbKv-I-n83Fv9MgmhW5h53MMFgLK5yk",
  authDomain: "medium-clone-76184.firebaseapp.com",
  projectId: "medium-clone-76184",
  storageBucket: "medium-clone-76184.appspot.com",
  messagingSenderId: "24706426970",
  appId: "1:24706426970:web:d3ce063c33a346d17c5063",
  measurementId: "G-D6X2XZY3E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()

export {auth, provider}