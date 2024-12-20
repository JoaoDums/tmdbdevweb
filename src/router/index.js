import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmesView from '../views/FilmesView.vue'
import SeriesView from '../views/SeriesView.vue'
import filmePaginaView from '../views/FilmePaginaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/filme',
      name: 'filme',
      component: filmePaginaView
    }
  ]
})

export default router