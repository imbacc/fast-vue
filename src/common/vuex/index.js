import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex 模块
import user_module from './module/user_vuex.js'
import test_vuex from './module/test_vuex.js'

//共享参数
const state = {

}

//同步方法
const mutations = {

}

//异步方法
const actions = {

}

const getters = {

}

const modules = {
	user_module,
  test_vuex,
}

const vuex = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
  modules,
})

export default vuex
