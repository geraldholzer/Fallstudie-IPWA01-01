import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AsienView from '../views/AsienView.vue'
import AmerikaView from '../views/AmerikaView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/asien',
    name: 'asien',
    component: AsienView
  },
  {
    path: '/amerika',
    name: 'amerika',
    component: AmerikaView
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
