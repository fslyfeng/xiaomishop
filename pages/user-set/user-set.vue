<template>
	<view>
		<card :headTitle="item.lable" v-for="(item, index) in list" :key="index">
			<uni-list><uni-list-item :title="list.title" v-for="(list, listIndex) in item.value" link="reLaunch" :key="listIndex" :to="list.path"></uni-list-item></uni-list>
		</card>

		<view class="p-3"><button type="default" class="bg-white">退出登陆</button></view>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
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
	methods: {}
};
</script>

<style>
page {
	background: #eeeeee;
}
</style>
