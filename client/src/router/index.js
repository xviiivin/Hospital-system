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
        path: "/payment1",
        name: "payment1",
        component: () =>
            import ("../views/user/Payment1.vue"),
    },
    {
        path: "/payment2",
        name: "payment2",
        component: () =>
            import ("../views/user/Payment2.vue"),
    },
    {
        path: "/docinfo",
        name: "docinfo",
        component: () =>
            import ("../views/doctor/Docinfo.vue"),
    },
    {
        path: "/alldoctor",
        name: "alldoctor",
        component: () =>
            import ("../views/user/AllDoctor.vue"),
    },
    {
        path: "/docinfo1",
        name: "docinfo1",
        component: () =>
            import ("../views/user/DocInfo1.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;