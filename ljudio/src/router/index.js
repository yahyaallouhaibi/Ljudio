import { createWebHistory, createRouter } from "vue-router";
import Songs from "../views/Songs.vue"
import Artists from "../views/Artists.vue"
import Playlists from "../views/Playlists.vue"
import App from "../App.vue"

const routes = [
    {
        path: "/",
        name:"Home",
        component: App,
    },
    {
        path: "/Songs/:videoId?",
        name:"Songs",
        component: Songs,
    },
    
    {
        path: "/Artists",
        name:"Artists",
        component: Artists,
    },
    {
        path:"/Playlists",
        name:"Playlists",
        component: Playlists,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;