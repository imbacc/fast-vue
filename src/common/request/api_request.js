import http from './http_request.js'
import is_cache from '../ztool/setting_cache_time.js'
import qs from 'qs'
import md5 from 'js-md5'

//封装的get post请求
/**
 * @param {api}		请求API地址
 * @param {json}	追加参数
 * @param {body}	表单数据
 * @param {type}	默认请求类型type为是post请求
 * @param {cache_time}  缓存时间 默认为0 不缓存 分钟单位
 */
const http_request = async (api,param = {},body = {},type = 'POST',cache_time = 0) => {
	
	const ca_api = api
	api = `${api}?${qs.stringify(param)}`
	
	let body_md5,sum_body
	
	body_md5 = md5(qs.stringify(body))
	sum_body = api+'bodymd5='+body_md5
	
	if(cache_time > 0){
		let cache = is_cache.get_cache('cache_'+sum_body)
		console.debug('缓存数据',cache)
		if(cache) return cache
	}
	
	let is_http = type.toLocaleUpperCase() === 'POST' ? is_http = http.post(api,body) : is_http = http.get(api,body)
	
	return await is_http.then((res) => {
		// console.log(res)
		if(res === 'false') return false
		if(cache_time > 0) is_cache.set_cache('cache_'+sum_body,res.result,cache_time)
		console.log('service:'+ca_api,res.result)
		return res.result || false
	})
	.catch((err) => {
		console.log(err)
		return false
	})
}

export default http_request