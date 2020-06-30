import Vue from 'vue'
import VueRouter from 'vue-router'


import Layout from '../layouts/Default.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Página Principal',
    component: () => import('../views/Principal.vue'),
    meta :{ layout: Layout }
  },
  {
    path: '/champions',
    name: 'Página de Champions',
    component: () => import('../views/PaginaChampions.vue'),
    meta :{ layout: Layout }
  },
  {
    path: '/champions/:id',
    name: 'Página de Champion Individual',
    component: () => import('../views/PaginaChampionIndividual.vue'),
    meta :{ layout: Layout }
  },
  {
    path: '/itens',
    name: 'Página de Itens',
    component: () => import('../views/PaginaItens.vue'),
    meta :{ layout: Layout }
  },
  {
    path: '/runes',
    name: 'Página de Runes',
    component: () => import('../views/PaginaRunes.vue'),
    meta :{ layout: Layout }
  },
  {
    path: '/summoner',
    name: 'Página de Summoner Spells',
    component: () => import('../views/PaginaSummoner.vue'),
    meta :{ layout: Layout }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
