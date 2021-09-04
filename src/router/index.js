import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import( /* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/:product_name',
    name: 'Product',
    props: true,
    component: () => import( /* webpackChunkName: ":product_name" */ '../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router