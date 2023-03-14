import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/user/Mainpage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
//   {
//     path: "/pay1",
//     name: "pay1",
//     component: () => import("../views/Prescription.vue"),
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
