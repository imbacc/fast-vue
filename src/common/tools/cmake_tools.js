import Vue from 'vue'

var startTime = 0,timer = null

const fun = {
	
	//格式化时间
	time_format:(datetime) => {
			datetime = Date.parse(datetime.replace(/-/gi,"/"))
			let minute = 1000 * 60
			let hour = minute * 60
			let day = hour * 24
			let halfamonth = day * 15
			let month = day * 30
			let now = new Date().getTime()
			let diffValue = now - datetime
			if(diffValue < 0) return
			let monthC = diffValue/month
			let weekC = diffValue/(7*day)
			let dayC = diffValue/day
			let hourC = diffValue/hour
			let minC = diffValue/minute
			let result = ""
			if(monthC>=1){
				result = parseInt(monthC) + "月前"
			}else if(weekC>=1){
				result = parseInt(weekC) + "周前"
			}else if(dayC>=1){
				result = parseInt(dayC) + "天前"
			}else if(hourC>=1){
				result = parseInt(hourC) + "小时前"
			}else if(minC>=1){
				result = parseInt(minC) + "分钟前"
			}else{
				result = "刚刚"
			}
			return result
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
				 // if(msg) uni.showToast({ title: msg,icon: 'none'})
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
}

export default fun