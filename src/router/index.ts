import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetail from "../views/ProductDetails.vue";
import Checkout from "../views/Checkout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: ProductDetail,
    },
    {
      path: "/checkout/:id",
      name: "checkout",
      component: Checkout,
    },
  ],
});

export default router;
