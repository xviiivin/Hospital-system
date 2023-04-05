import { initializeApp,  } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyAUJgCTgMTCiQ1pqzrLkJ-73tXDOHsTD4A",
  authDomain: "win-hospital-5bcf7.firebaseapp.com",
  projectId: "win-hospital-5bcf7",
  storageBucket: "win-hospital-5bcf7.appspot.com",
  messagingSenderId: "891470099793",
  appId: "1:891470099793:web:cd8c7264d049d47a82cf70",
  measurementId: "G-X7B6QTNYEE",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);

export { storage };
