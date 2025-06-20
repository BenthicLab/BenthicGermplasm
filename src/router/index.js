import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const GermplasmView = () => import("../views/GermplasmView.vue");
const AboutView = () => import("../views/AboutView.vue");
const LoginView = () => import("../views/LoginView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Resolve: refresh 404 -> cp docs/index.html docs/404.html -> redirect ok.
  // history: createWebHashHistory(), // Resolve: refresh no 404, but /#/ display in uil.
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/germplasm",
      name: "Gremplasm",
      component: GermplasmView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
  ],
});

export default router;
