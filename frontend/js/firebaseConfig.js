// Firebase config file
// js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBxpXpWYlkazZbN-6cpPwmbL8FsAJmwSlU",
  authDomain: "donationplatform-46a74.firebaseapp.com",
  projectId: "donationplatform-46a74",
  storageBucket: "donationplatform-46a74.firebasestorage.app",
  messagingSenderId: "1040216617022",
  appId: "1:1040216617022:web:3583c5df926d6f012c216f",
  measurementId: "G-ENFP5MGRZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

