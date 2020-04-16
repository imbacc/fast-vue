//全局状态
const state = {

}

//同步方法
const mutations = {
	/**
	 * @param {Object} info
	 * 0是状态属性名称
	 * 1是赋予状态属性的值
	 */
	set_vuex_test(state, info) {
		state[info[0]] = info[1]
		console.log(info)
	},
}

//get方法
const getters = {

}

//异步方法
const actions = {

}

export default {
	state,
	mutations,
	getters,
	actions
}
