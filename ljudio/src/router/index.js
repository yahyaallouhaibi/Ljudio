import { createWebHistory, createRouter } from "vue-router";
import Songs from "../views/Songs.vue"
import Artists from "../views/Artists.vue"
import Artist from "../components/Artist.vue"
import Playlists from "../views/Playlists.vue"
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name:"Home",
        component: Home,
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
        path: "/Artists/:artistId",
        name:"Artist",
        component: Artist,
    },
    {
        path:"/Playlists/",
        name:"Playlists",
        component: Playlists,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;