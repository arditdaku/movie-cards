import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Movies = () => import("../views/Movies.vue");
const MovieDetails = () => import("../views/MovieDetails.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/movies", component: Movies },
  { path: "/movies/:id", component: MovieDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
