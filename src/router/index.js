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
    path: '/*',
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/compare',
    name: 'Compare',
    component: () => import( /* webpackChunkName: "compare" */ '../views/Compare.vue')
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
    path: '/tester',
    name: 'tester',
    component: () => import( /* webpackChunkName: "tester" */ '../views/tester.vue')
  },
  {
    path: '/user',
    name: 'Profile',
    component: () => import( /* webpackChunkName: "Profile" */ '../views/Profile.vue'),
    props: true,
    children: [{
        path: ':purchaseDetail',
        name: 'purchase',
        props: true,
        component: () => import( /* webpackChunkName: "purchase" */ '../views/setting/purchase.vue')
      },
      {
        path: ':manage/edit',
        name: 'manageProfile',
        props: true,
        component: () => import( /* webpackChunkName: "manageProfile" */ '../views/setting/manageProfile.vue')
      },
      {
        path: ':address-info',
        name: 'Address',
        props: true,
        component: () => import( /* webpackChunkName: "Address" */ '../views/setting/Address.vue')
      },
    ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/:productId-:productName',
    name: 'Product',
    props: true,
    component: () => import( /* webpackChunkName: "Product" */ '../views/Product.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import( /* webpackChunkName: "form" */ '../views/Form.vue')
  },
  {
    path: '/:categoryName',
    name: 'resultProducts',
    props: true,
    component: () => import( /* webpackChunkName: "resultProducts" */ '../views/resultProducts.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router