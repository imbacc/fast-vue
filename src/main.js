import Vue from 'vue'
import App from './App'

import vuex from './common/vuex'		//导入vuex
import router from './common/router'	//导入router
import http_action from './common/tools/http_action.js';	//封装请求
import cmake_tools from './common/tools/cmake_tools.js';	//自定义函数

Vue.prototype.is_vuex = vuex
Vue.prototype.is_router = router
Vue.prototype.is_tools = cmake_tools
Vue.prototype.is_action = http_action
Vue.prototype.is_cdn = 'https://www.baidu.com/static/img/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuex,
  router,
  components: { App },
  template: '<App/>'
})
