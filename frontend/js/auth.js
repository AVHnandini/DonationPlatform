// Authentication logic
// js/auth.js
import { auth, db } from './firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// Signup function
export async function signup(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", userCredential.user.uid), { name, email, donations: [] });
  return userCredential.user;
}

// Login function
export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// Logout function
export function logout() {
  return signOut(auth);
}
