import { createRouter, createWebHistory } from 'vue-router'
import StarMenuView from '../views/StartMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StarMenuView
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/QuestionsView.vue')
    },
    {
      path: '/questions/:type',
      name: 'questions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestionsView.vue')
    }
  ]
})

export default router
