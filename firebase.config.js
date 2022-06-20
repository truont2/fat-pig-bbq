import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_ID,
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }