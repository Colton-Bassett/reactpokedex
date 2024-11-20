// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQEY6uxg3v2ljc7KUo5hHXDkcPEejT46w",
  authDomain: "reactpokedex-3f2b4.firebaseapp.com",
  projectId: "reactpokedex-3f2b4",
  storageBucket: "reactpokedex-3f2b4.firebasestorage.app",
  messagingSenderId: "649031279436",
  appId: "1:649031279436:web:604b38d48f6020fd4165e9",
  measurementId: "G-3TWFK22HTY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
