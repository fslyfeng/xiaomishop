import App from './App'

// #ifndef VUE3
import Vue from 'vue'
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

App.mpType = 'app'
const app = new Vue({
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
