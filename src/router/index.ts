import { createRouter, createWebHistory } from 'vue-router'
import StandbyView from '@/views/StandbyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'standby',
      component: StandbyView,
    },
  ],
})

export default router
