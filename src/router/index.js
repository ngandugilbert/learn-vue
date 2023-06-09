import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConditionView from '../views/ConditionView.vue'
import FormsVue from '../views/FormsView.vue'
import ApiView from '../views/ApiView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/conditional',
    name: 'condition',
    component: ConditionView
  },
  
  {
    path: '/forms',
    name: 'form',
    component: FormsVue
  },
  
  {
    path: '/simple-api',
    name: 'simple-api',
    component: ApiView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
