import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";

import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { firebaseApp } from "./firebase";
import { VueFire } from "vuefire";

const app = createApp(App);
app.use(VueFire, {
  firebaseApp,
});
app.use(router);
app.use(VueSweetalert2);
app.mount("#app");
