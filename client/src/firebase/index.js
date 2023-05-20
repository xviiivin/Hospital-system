import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAhgbgwMC3c7Ui2SW2f6kMmqClyQmL7lEw",
  authDomain: "hospital-system-4fbc4.firebaseapp.com",
  projectId: "hospital-system-4fbc4",
  storageBucket: "hospital-system-4fbc4.appspot.com",
  messagingSenderId: "336290794526",
  appId: "1:336290794526:web:cd9fc9febd16986264f20f",
  measurementId: "G-DY3395HBK3",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);

export { storage };
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC27f53wxp-qHzKp4gbE16Zkz840nVulJo",
//   authDomain: "hostpital-5d813.firebaseapp.com",
//   projectId: "hostpital-5d813",
//   storageBucket: "hostpital-5d813.appspot.com",
//   messagingSenderId: "417276245719",
//   appId: "1:417276245719:web:3063631f64522b4c716292",
//   measurementId: "G-WLH09D2560",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import {getStorage} from "firebase/storage";
// const storage = getStorage(app);

// export{storage}
