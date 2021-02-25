import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: () => import('../components/LogIn.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main.vue')
  },
  {
    path: '/addReminder',
    name: 'AddReminder',
    component: () => import('../components/AddReminder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
