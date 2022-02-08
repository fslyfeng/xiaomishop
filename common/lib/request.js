export default {
	//全局配置
	common: {
		baseUrl: "http://ceshi3.dishait.cn/api",
		header: {
			'Content-Type': 'application/json; charset=utf-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: 'GET',
		dataType: 'json'
	},
	//请求 返回promise
	reuqest(options = {}) {
		//组织参数
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.commom.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		//请求
		return new Promise((res, rej) => {
			uni.request({
				...options,
				success: result => {
					//服务端失败
					if (result.statusCode !== 200) {
						uni.showToast({
							title: result.data.msg || '服务端失败',
							icon: 'none'
						});
						return rej()
					}
					//成功
					let data = result.data.data;
					res(data)
				},
				fail: (error) => {
					return uni.showToast({
						title: error.errMsg || '请求失败',
						icon: 'none'
					});
					return rej()
				}
			})
		})
	}
}
