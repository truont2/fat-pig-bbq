// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fat-pig-bbq-10f61.firebaseapp.com",
  projectId: "fat-pig-bbq-10f61",
  storageBucket: "fat-pig-bbq-10f61.appspot.com",
  messagingSenderId: "545197357705",
  appId: "1:545197357705:web:1047fb3cbc1feec4c4a458",
  measurementId: "G-G1RKZYYLFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
