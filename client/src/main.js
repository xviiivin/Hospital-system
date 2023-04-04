import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";

import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { firebaseApp } from "./firebase";
const app = createApp(App);

// app.use(VueFire, {
//   // imported above but could also just be created here
//   firebaseApp,
//   modules: [
//     // we will see other modules later on
//     VueFireAuth(),
//   ],
// });
import { createFirestorePlugin } from 'vuefire';
import { createStoragePlugin } from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyAQ_Nj7ctbW5-_EfDmVIFINy3UcXea42HU",
  authDomain: "win-hospital.firebaseapp.com",
  projectId: "win-hospital",
  storageBucket: "win-hospital.appspot.com",
  messagingSenderId: "56435903997",
  appId: "1:56435903997:web:fa68f96d5bc9cf546b5d94",
  measurementId: "G-0BWM8W7NW6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Use the Vuefire plugins
app.use(createFirestorePlugin({ firebase }));
app.use(createStoragePlugin({ firebase }));
app.mount('#app');

app.use(router);
app.use(VueSweetalert2);
app.mount("#app");
