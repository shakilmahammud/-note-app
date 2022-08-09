// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1yPun1R-_eU6GdVCP9h6omSw_dl_yyEU",
    authDomain: "note-app-5e5a0.firebaseapp.com",
    projectId: "note-app-5e5a0",
    storageBucket: "note-app-5e5a0.appspot.com",
    messagingSenderId: "580155821032",
    appId: "1:580155821032:web:787a4e8eb7ab9dc488b25d"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app)