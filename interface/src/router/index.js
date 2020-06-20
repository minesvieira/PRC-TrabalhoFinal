import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Página Principal',
    component: () => import('../views/Principal.vue')
  },
  {
    path: '/champions',
    name: 'Página de Champions',
    component: () => import('../views/PaginaChampions.vue')
  },
  {
    path: '/champions/:id',
    name: 'Página de Champion Individual',
    component: () => import('../views/PaginaChampionIndividual.vue')
  },
  {
    path: '/itens',
    name: 'Página de Itens',
    component: () => import('../views/PaginaItens.vue')
  },
  {
    path: '/runes',
    name: 'Página de Runes',
    component: () => import('../views/PaginaRunes.vue')
  },
  {
    path: '/summoner',
    name: 'Página de Summoner Spells',
    component: () => import('../views/PaginaSummoner.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
