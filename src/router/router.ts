import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../view/elevator/Index.vue";
import AboutView from "../view/styles/Index.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
