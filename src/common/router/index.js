import Vue from 'vue'
import Router from 'vue-router'

// 获取module文件下子模块内容
const modulesFiles = require.context('./module', true, /\.js$/)
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  module = {...module, ...value.default} 
  return module
}, {})

console.log('router modules=', modules)

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
      ...modules,
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
