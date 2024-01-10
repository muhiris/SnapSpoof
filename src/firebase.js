// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBico6oUx3lE0q7IlDuPdEyPFfIRgrPyS8",
  authDomain: "snapchat-bd790.firebaseapp.com",
  projectId: "snapchat-bd790",
  storageBucket: "snapchat-bd790.appspot.com",
  messagingSenderId: "754746165173",
  appId: "1:754746165173:web:39b3410ff842477764bbfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);