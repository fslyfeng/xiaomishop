<template>
	<view>
		<card :headTitle="item.lable" v-for="(item, index) in list" :key="index">
			<uni-list><uni-list-item :title="list.title" v-for="(list, listIndex) in item.value" link="reLaunch" :key="listIndex" :to="list.path"></uni-list-item></uni-list>
		</card>

		<view class="p-3"><button type="default" class="bg-white" @click="logoutEvent()">退出登录</button></view>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
import { mapMutations, mapState } from 'vuex';
export default {
	components: {
		card
	},
	data() {
		return {
			list: [
				{
					lable: '账号管理',
					value: [{ title: '个人资料', path: '' }, { title: '收货地址', path: '' }]
				},
				{
					lable: '关于商城',
					value: [
						{ title: '关于商城', path: '/pages/about/about' },
						{ title: '意见反馈', path: '' },
						{ title: '协议规则', path: '' },
						{ title: '资质证件', path: '' },
						{ title: '用户协议', path: '' },
						{ title: '隐私政策', path: '' }
					]
				}
			]
		};
	},
	computed: {
		...mapState({
			token: state => state.user.token,
			loginStatus: state => state.user.loginStatus
		})
	},
	methods: {
		...mapMutations(['logout']),

		//退出登录
		logoutEvent() {
			// this.$H.post('/logout',{},{
			// 					token:false,
			// 					toast:false
			// 				}).then(res=>{
			// 		// 退出登录
			this.logout();

			uni.showToast({
				title: '退出成功',
				icon: 'none'
			});
			uni.navigateBack({
				delta: 1
			});
			//});
		}
	}
};
</script>

<style>
page {
	background: #eeeeee;
}
</style>
