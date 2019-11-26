import Vue from 'vue'
import moment from 'moment'

moment.locale('ZH-CN')

var startTime = 0,timer = null,_this = this

const judgeType = (obj) => {
	  // tostring会返回对应不同的标签的构造函数
	  const toString = Object.prototype.toString
	  const map = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regExp',
		'[object Undefined]': 'undefined',
		'[object Null]': 'null',
		'[object Object]': 'object',
	  }
	  if (obj instanceof Element) return 'element'
	  return map[toString.call(obj)]
}

//定义检测数据类型的功能函数
const checkedType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1)
}

const fun = {
	//分组 集合 对比对象名字字段
	group_bylist:(list,name) => {
		const groupBy = (array, f) => {
			const groups = {}
			array.forEach((o) => {
				const group = JSON.stringify(f(o))
				groups[group] = groups[group] || []
				groups[group].push(o)
			})
			return Object.keys(groups).map((group) => groups[group])
		}
		
		return groupBy(list, (item) => [item[name]])
	},
	
	//格式化 - 日期格式化
	time_format:(datetime,fmt_datetime = 'YYYY-MM-DD HH:mm:ss') => {
		return moment(datetime,fmt_datetime).fromNow()
	},
	
	//格式化 - 相对时间
	get_date_time:(fmt_datetime = 'YYYY-MM-DD HH:mm:ss',value)=> {
		return moment().format(fmt_datetime,value)
	},
	
	//获取周期星期
	get_week_format:(date,re_index = false) => {
		  let mydate = new Date(date)
		  const weekday = ["周日","周一","周二","周三","周四","周五","周六"]
		  return re_index ? mydate.getDay() : weekday[mydate.getDay()]
	},
	
	/**
	 * 1为节流处理,2为防抖处理<br/>
	 * @fun 第一个字段传方法
	 * @type 传类型
	 * @wait 传时间 毫秒为单位 1000ms = 1s
	 * @msg 友情提示
	 */
	dou_fun:(fun,type = 1,wait = 500,msg = '你操作太快了呀!') => {
		let _this = this,args = arguments
		if(type == 1){
			let curTime = (new Date()).getTime()
			startTime = startTime == 0 ? curTime : startTime
			// console.log('curTime='+curTime)
			// console.log('startTime='+startTime)
			
			if((curTime - startTime) > wait){ // 固定上一次操作离这一次操作间隔>1000ms，则发送一次。
				startTime = curTime
				console.log('节流处理...')
				fun(_this,args)
			}
		}else{
			if(timer){
				 clearTimeout(timer)
				 timer = null
				 console.log('重置防抖...')
				 if(msg) console.log(msg)
				 return
			}
			timer = setTimeout(() => {
				clearTimeout(timer)
				timer = null
				console.log('防抖处理...')
				fun(_this,args)
			}, wait)
		}
	},
	
	//拷贝对象
	deep_clone:(data) => {
		  const type = judgeType(data)
		  let obj
		  if (type === 'array') {
			obj = []
		  } else if (type === 'object') {
			obj = {}
		  } else {
			// 不再具有下一层次
			return data
		  }
		  if (type === 'array') {
			// eslint-disable-next-line
			for (let i = 0, len = data.length; i < len; i++) {
				obj.push(fun.deepClone(data[i]))
			}
		  } else if (type === 'object') {
			// 对原型上的方法也拷贝了....
			// eslint-disable-next-line
			for (const key in data) {
			  obj[key] = fun.deepClone(data[key])
			}
		  }
		  return obj
	},
}

export default fun

Vue.prototype.$cdn = 'http://img.gongdu.info/static/img/'
Vue.prototype.is_fun_tools = fun