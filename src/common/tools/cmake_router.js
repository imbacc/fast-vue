import router from '../router'
import vuex from '../vuex'
import cfg from '../config/cfg.js';

//检查用户登录状态
const check_login = async () => {
	let is_login =  localStorage.getItem('token') || false
	if(is_login) return true
	return await vuex.dispatch('check_login')
}

router.beforeEach((to, from, next) => {
  // ...前置守卫
  if(!cfg.check_login){
	  console.log('cfg.check_login=',cfg.check_login)
  }
  next()
})

router.afterEach((to, from) => {
  // ...后置钩子
})

export default router
