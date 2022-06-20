import { getApps, initializeApp } from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_ID,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

export default function initFirebase() {
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    // Initialize other firebase products here
  }
}
