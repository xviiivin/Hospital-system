import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("../views/user/Mainpage.vue"),
    },
    {
        path: "/doctor/",
        name: "doc",
        component: () =>
            import ("../views/doctor/Mainpage.vue"),
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
        path: "/pending",
        name: "pending",
        component: () =>
            import ("../views/user/Payment1.vue"),
    },
    {
        path: "/payment/:id",
        name: "payment",
        component: () =>
            import ("../views/user/Payment2.vue"),
    },
    {
        path: "/doctor/info",
        name: "docinfo",
        component: () =>
            import ("../views/doctor/Docinfo.vue"),
    },
    {
        path: "/alldoctor/:id",
        name: "alldoctor",
        component: () =>
            import ("../views/user/AllDoctor.vue"),
    },
    {
        path: "/user/doctor",
        name: "docinfo1",
        component: () =>
            import ("../views/user/DocInfo1.vue"),
    },
    {
        path: "/user/hospital",
        name: "hospitalrecord",
        component: () =>
            import ("../views/user/HospitalRecord.vue"),
    },
    {
        path: "/user/info",
        name: "userinfo",
        component: () =>
            import ("../views/user/UserInfo.vue"),
    },

    {
        path: "/admin/role",
        name: "admin",
        component: () =>
            import ("../views/admin/Addrole.vue"),
    },
    {
        path: "/admin/users",
        name: "alluser",
        component: () =>
            import ("../views/admin/Alluser.vue"),
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: () =>
            import ("../views/user/detail.vue"),
    },
    {
        path: "/symptomrecord/:id",
        name: "symptom",
        component: () =>
            import ("../views/user/SymptomRecord.vue"),
    },
    {
        path: "/slip/:id",
        name: "slip",
        component: () =>
            import ("../views/admin/Slip.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;