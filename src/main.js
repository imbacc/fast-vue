import Vue from 'vue'

import App from './App'

import router from './common/router'
import vuex from './common/vuex'
import is_tools from './common/ztool/is_fun_tools.js'

Vue.config.productionTip = false

Vue.prototype.is_router = router
Vue.prototype.is_vuex = vuex
Vue.prototype.is_tools = is_tools

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuex,
  router,
  components: { App },
  template: '<App/>'
})
