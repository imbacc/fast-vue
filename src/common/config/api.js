//api接口地址
var api = ''

import lc_api from './module/lc_api.js'
import dzf_api from './module/dzf_api.js'

export default {
	...lc_api,
	...dzf_api,
	
	send_sms:'user_info_api/f/send_sms',
	
	get_args_page: (json,cur) => get_args(json,cur),
}
	
const get_args = (json = {},cur = [1,10]) => {
	cur[0] <= 0 ? cur[0] = 1 : false
	cur[1] <= 0 ? cur[1] = 1 : false
	json.pageNum = cur[0]
	json.pageSize = cur[1]
	return json
}