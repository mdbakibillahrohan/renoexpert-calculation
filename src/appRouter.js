import {
  createMemoryHistory,
  createWebHashHistory,
  createRouter,
} from "vue-router";
import HouseDetails from "./pages/HouseDetails.vue";
import ScopeOfWork from "./pages/ScopeOfWork.vue";
import GetQuote from "./pages/GetQuote.vue";
const routes = [
  {
    path: "/house-details",
    component: HouseDetails,
  },
  {
    path: "/scope-of-work",
    component: ScopeOfWork,
  },
  {
    path: "/get-quote",
    component: GetQuote,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
