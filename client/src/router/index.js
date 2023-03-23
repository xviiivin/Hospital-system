import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/user/Mainpage.vue";
const routes = [{
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/docmain",
        name: "doc",
        component: () =>
            import ("../views/doctor/Mainpage.vue"),
    },
    {
        path: "/usermain",
        name: "user",
        component: () =>
            import ("../views/user/Mainpage.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/Register.vue"),
    },
    {
        path: "/whatza01",
        name: "whatza01",
        component: () =>
            import ("../views/whatza.vue"),
    },
    {
        path: "/payment",
        name: "payment",
        component: () =>
            import ("../views/user/Payment.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;