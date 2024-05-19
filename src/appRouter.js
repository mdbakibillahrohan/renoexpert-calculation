import {
  createMemoryHistory,
  createWebHashHistory,
  createRouter,
} from "vue-router";
import HouseDetails from "./pages/HouseDetails.vue";
import ScopeOfWork from "./pages/ScopeOfWork.vue";
const routes = [
  {
    path: "/house-details",
    component: HouseDetails,
  },
  {
    path: "/scope-of-work",
    component: ScopeOfWork,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
