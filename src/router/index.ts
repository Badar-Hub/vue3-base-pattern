import UserRoute from "@/views/UserRoute.vue";
import { useState } from "@/store/auth/state";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/modules/UserManagement/component/Login.vue";
import Register from "@/modules/UserManagement/component/Register.vue";

import DashboardLayout from "@/views/DashboardLayout.vue";
import Home from "@/modules/Dashboard/component/Home.vue";

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
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          requireAuth: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  const authState = useState();
  const isAuthorized = authState.isAuthorized;

  try {
    if (to.meta.requireAuth && !isAuthorized) {
      next({ name: "Login" });
    } else {
      next();
    }
  } catch (err) {
    next({ name: "Login" });
  }
});

export default router;
