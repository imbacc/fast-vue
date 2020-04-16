/**
 * 拦截请求
 */
import axios from 'axios'

var http = axios.create({
    timeout: 6000
})

const console_msg = (msg = '网络异常') => console.log(msg)

// 添加请求拦截器
http.interceptors.request.use((config) => {
	// 在发送请求之前做些什么

  // let token = localStorage.getItem("token") || ""
  // if(token instanceof String) token = JSON.parse(token)
  // let head_option = {Authorization: `Bearer ${token}`}

  // //添加通用参数 Token
  // config.headers = token ? head_option : {}


	console_msg("【config】 " + JSON.stringify(config))

	return config
}, (error) => {
	// 对请求错误做些什么
	return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use((res) => {
	// 对响应数据做点什么

    // if(res.statusCode === 401){
    //   error_msg("登录信息已失效")
    //   uni.clearStorage()
    //   uni.reLaunch({url:'/pages/login/login',animationType:'slide-in-bottom'})
    //   return 'false'
    // }

    // if(res.statusCode === 503){
    //   error_msg("503错误")
    //   return 'false'
    // }

    // if(res.errMsg.toString().indexOf("fail") !== -1 || res.statusCode === 0){
    //   error_msg('网络异常')
    //   return 'false'
    // }

    // if(res.data.hasOwnProperty("error")){
    //   const error = res.data.error
    //   if(error.code === "sys_error"){
    //     error_msg('网络异常')
    //     console.error('服务报错:',error.message)
    //     return 'false'
    //   }
    //   if(error.hasOwnProperty('message')){
    //     error_msg(error.message)
    //     console.error('拦截通知:',error.message)
    //     return 'false'
    //   }
    // }

    // if(res.data.hasOwnProperty('result')) return res.data

    console_msg("【response】 " + JSON.stringify(res))

    return res
}, (error) => {
	// 对响应错误做点什么
	return Promise.reject(error)
})


export default http
