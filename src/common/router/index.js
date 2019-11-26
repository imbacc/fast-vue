import Vue from 'vue'
import Router from 'vue-router'

import lc_router from './module/lc_router.js';
import dzf_router from './module/dzf_router.js';

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        redirect: 'test'
      },
      {
       path: '/',
       name: 'home',
       component: () => import('@/view/index/index')
      },
      ...lc_router,
      ...dzf_router,
  ]
})

router.beforeEach((to, from, next) => {
  // ...前置守卫
})

router.afterEach((to, from) => {
  // ...后置钩子
})

export default router
