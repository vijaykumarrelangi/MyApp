// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDbhsteZDquK5pFsRpgtHR26IQ-rMFvzA",
  authDomain: "myapp-fb7b7.firebaseapp.com",
  projectId: "myapp-fb7b7",
  storageBucket: "myapp-fb7b7.firebasestorage.app",
  messagingSenderId: "460747421159",
  appId: "1:460747421159:web:62e85b537c477d6a593942",
  measurementId: "G-CX31ED309M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
