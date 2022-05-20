import Vue from 'vue'
import App from './App'
import store from "./store"

Vue.prototype.$store = store

// #ifndef VUE3
// import Vue from 'vue'
Vue.config.productionTip = false

// 引入全局组件

import divider from "@/components/common/divider.vue"
Vue.component('divider', divider)
//引入全局加载动画
import loading from "@/components/common/loading.vue"
Vue.component('loading', loading)

// 引入request库
import $H from '@/common/lib/request.js';
Vue.prototype.$H = $H


//权限跳转
Vue.prototype.navigateTo = (options) => {
	//判断用户是否登录
	if (!store.state.user.loginStatus) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return uni.navigateTo({
			url: '/pages/login/login',
		});
	}
	uni.navigateTo(options);

}
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
