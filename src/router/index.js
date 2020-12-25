import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editFile',
    name: 'editFile',
    component: () => import('../views/EditFile.vue')
  },
  {
    path: '/PlugIn',
    name: 'PlugIn',
    component: () => import('../views/PlugIn')
  }
]

const router = new VueRouter({
  routes
})

export default router
