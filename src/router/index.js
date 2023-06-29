import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView";
import Animes from "@/pages/Animes";
import Characters from "@/pages/Characters";
import RandomAnime from "@/pages/RandomAnime";
import About from "@/pages/About";
import Searched from "@/pages/Searched";
import AnimeInfo from "@/pages/AnimeInfo";
import CharacterInfo from "@/pages/CharacterInfo";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/animes",
    name: "animes",
    component: Animes,
  },
  {
    path: "/characters",
    name: "characters",
    component: Characters,
  },
  {
    path: "/randomAnime",
    name: "randomAnime",
    component: RandomAnime,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/searched",
    name: "searched",
    component: Searched,
  },
  {
    path: "/anime/:id?",
    name: "anime",
    component: AnimeInfo,
  },
  {
    path: "/character/:id?",
    name: "character",
    component: CharacterInfo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
