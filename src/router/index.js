import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/loginDemo/index.vue'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    redirect: '/login' // 添加重定向规则，将根路径重定向到 /login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/index',
    name: 'home',
    component: () => import('../views/homeDemo/index.vue')
  },
  {
    path: '/fuzi',
    name: 'fuzi',
    component: () => import('../views/fuzi/index.vue')
  },
  {
    path: '/textDemo',
    name: 'textDemo',
    component: () => import('../views/textDemo.vue')
  },
  {
    path: '/chess',
    name: 'chessDemo',
    component: () => import('../views/chessDemo/index.vue')
  },
  {
    path: '/chess01',
    name: 'chess01',
    component: () => import('../views/chess01/index.vue')
  },
  {
    path: '/chess02',
    name: 'chess02',
    component: () => import('../views/chess02/index.vue')
  },
  {
    path: '/naiveTree01',
    name: 'naiveTree01',
    component: () => import('../views/naiveTree01/index.vue')
  },
  {
    path: '/naiveUpLoadImage',
    name: 'naiveUpLoadImage',
    component: () => import('../views/naiveUpLoadImage/index.vue')
  },
  {
    path: '/naiveSelect',
    name: 'naiveSelect',
    component: () => import('../views/naiveSelect/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
