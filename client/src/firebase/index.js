import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyAQ_Nj7ctbW5-_EfDmVIFINy3UcXea42HU",
  authDomain: "win-hospital.firebaseapp.com",
  projectId: "win-hospital",
  storageBucket: "win-hospital.appspot.com",
  messagingSenderId: "56435903997",
  appId: "1:56435903997:web:fa68f96d5bc9cf546b5d94",
  measurementId: "G-0BWM8W7NW6",
});

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const todosRef = collection(db, "todos");
