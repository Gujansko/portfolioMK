import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "portfolio-915fa.firebaseapp.com",
  projectId: "portfolio-915fa",
  storageBucket: "portfolio-915fa.appspot.com",
  messagingSenderId: "1014407825356",
  appId: "1:1014407825356:web:0f9809d49fa2e0e8533f69",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
