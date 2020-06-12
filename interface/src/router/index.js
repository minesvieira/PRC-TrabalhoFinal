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
    path: '/filmes',
    name: 'Página Principal',
    component: () => import('../views/Principal.vue')
  },
  {
    path: '/filmes/:id',
    name: 'Consulta Filme',
    component: () => import('../views/Consulta.vue')
  },
  {
    path: '/atores',
    name: 'Página de Atores',
    component: () => import('../views/PaginaAtores.vue')
  },
  {
    path: '/atores/:id',
    name: 'Consulta Ator',
    component: () => import('../views/ConsultaAtor.vue')
  },
  {
    path: '/personagens',
    name: 'Página de Personagens',
    component: () => import('../views/PaginaPersonagens.vue')
  },
  {
    path: '/personagens/:id',
    name: 'Consulta Personagem',
    component: () => import('../views/ConsultaPersonagem.vue')
  },
  {
    path: '/champions',
    name: 'Página de Champions',
    component: () => import('../views/PaginaChampions.vue')
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
