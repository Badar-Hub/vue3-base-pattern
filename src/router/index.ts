import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/modules/UserManagement/component/Login.vue";
import Register from "@/modules/UserManagement/component/Register.vue";
import UserRoute from "@/views/UserRoute.vue";

import DashboardLayout from "@/views/DashboardLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    component: UserRoute,
    children: [
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/",
    name: "Dashboard",
    component: DashboardLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
