import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';

const firebase_config = {
  apiKey: "AIzaSyD3nl52FXcMVT7yY0M3G1iHaDput5Uk3MY",
  authDomain: "check-producto.firebaseapp.com",
  projectId: "check-producto",
  storageBucket: "check-producto.firebasestorage.app",
  messagingSenderId: "850725830455",
  appId: "1:850725830455:web:e08991a13b8400ce9624b2"
};

initializeApp(firebase_config);

const auth = getAuth();

if (window.location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
}

export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  onAuthStateChanged, 
  signOut
};
