import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'communes',
        component: () => import('@/views/Communes.vue')
      },
      {
        path: 'departements',
        component: () => import('@/views/Departements.vue')
      },
      {
        path: 'regions',
        component: () => import('@/views/Regions.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
