import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Sample from '../components/pages/Sample'
import Contact from '../components/pages/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/sample/:teamid',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
