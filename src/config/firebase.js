// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPe_832Wl9nKpyt5GQpZvx1Qq8ah3hkiw",
  authDomain: "fir-test-f21a6.firebaseapp.com",
  projectId: "fir-test-f21a6",
  storageBucket: "fir-test-f21a6.appspot.com",
  messagingSenderId: "126615296070",
  appId: "1:126615296070:web:64247084badd174c579247",
  measurementId: "G-NJZPG6R517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);