import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 获取module文件下子模块内容
const modulesFiles = require.context('./module', true, /\.js$/)
const modules = modulesFiles.keys().reduce((module, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  module[moduleName] = value.default
  return module
}, {})

console.log('vuex modules=', modules)

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

const vuex = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
  modules
})

export default vuex
