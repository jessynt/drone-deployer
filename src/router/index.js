import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import {auth, guest} from "./middleware";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: auth,
      component: Home,
    },
    {
      path: '/auth/login',
      name: 'login',
      beforeEnter: guest,
      component: () => import('../views/Login.vue')
    }
  ]
});
