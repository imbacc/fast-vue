import uploadImage from '@/common/lib/ossutil/uploadFile.js'

export default {
	methods: {
		upload_file(file){
			return new Promise((resolve,reject)=>{
				uni.showLoading({title:'上传中...'})
				uploadImage(file, 'house_img/',
					(result) => {
						console.log(result)
						resolve(result)
						uni.hideLoading()
					},
					(err)=>{
						reject(false)
						console.log(err)
						uni.showToast({ title: '上传失败!',icon: 'none',duration:2000}),
						uni.hideLoading()
				},'.jpg','image')
			})
		},
	},
}