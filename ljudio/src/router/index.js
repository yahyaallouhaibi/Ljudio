import { createWebHistory, createRouter } from "vue-router";
import Songs from "../views/Songs.vue"
import Artists from "../views/Artists.vue"

const routes = [
    {
        path: "/",
        name:"Songs",
        component: Songs,
    },
    {
        path: "/Artists",
        name:"Artists",
        component: Artists,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;