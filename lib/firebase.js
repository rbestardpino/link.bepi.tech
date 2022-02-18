// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDkoDysscT6AV-izWb8XvivjcA8NBOOnc",
  authDomain: "link-bepi-tech.firebaseapp.com",
  projectId: "link-bepi-tech",
  storageBucket: "link-bepi-tech.appspot.com",
  messagingSenderId: "1052769049797",
  appId: "1:1052769049797:web:177e4cd376bbd518ef24ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
