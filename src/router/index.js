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
    path: '/naiveUpLoadImage01',
    name: 'naiveUpLoadImage01',
    component: () => import('../views/naiveUpLoadImage01/index.vue')
  },
  {
    path: '/naiveUpLoadImage02',
    name: 'naiveUpLoadImage02',
    component: () => import('../views/naiveUpLoadImage02/index.vue')
  },
  {
    path: '/naiveSelect',
    name: 'naiveSelect',
    component: () => import('../views/naiveSelect/index.vue')
  },
  {
    path: '/naivePDFUploadView',
    name: 'naivePDFUploadViewPDF上传和预览',
    component: () => import('../views/naivePDFUploadView/index.vue')
  },
  {
    path: '/tuozhuai',
    name: 'tuozhuai拖拽',
    component: () => import('../views/tuozhuai/index.vue')
  },
  {
    path: '/tuozhuaiCard',
    name: 'tuozhuaiCard拖拽卡片',
    component: () => import('../views/tuozhuaiCard/index.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
