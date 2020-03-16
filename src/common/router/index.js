import Vue from 'vue'
import Router from 'vue-router'

import test_router from './module/test_router.js';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
       path: '/home',
       name: 'home',
       component: () => import('@/view/index/index')
      },
      ...test_router,
  ]
})

router.beforeEach((to, from, next) => {
  // ...前置守卫 一定要next !!!
  next()
})

router.afterEach((to, from) => {
  // ...后置钩子
})

export default router
