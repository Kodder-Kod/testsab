import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyARcaC6WaWeisyh-6QgG41P6catzXYnrCw",
  authDomain: "chisendposproduction006.firebaseapp.com",
  databaseURL: "https://chisendposproduction006-default-rtdb.firebaseio.com",
  projectId: "chisendposproduction006",
  storageBucket: "chisendposproduction006.firebasestorage.app",
  messagingSenderId: "454783332421",
  appId: "1:454783332421:web:adbf774519b646498bb32c",
  measurementId: "G-JNW5JVG1CQ"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


