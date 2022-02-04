<template>
	<view class="p-2">
		<view class="mb-2 p-2 bg-white rounded" v-for="(item, index) in list" :key="index" @click="open(item)" hover-class="bg-light-secondary">
			<view class="text-dark font-">{{ item.title }}</view>
			<view class="font text-light-muted">{{ item.desc }}</view>
			<view class="font text-light-muted">{{ item.create_time }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					title: '测试标题文字式样',
					desc: '测试详情文字测试详情文字测试详情文字',
					create_time: '10月2日'
				},
				{
					title: '测试标题文字式样',
					desc: '测试详情文字测试详情文字测试详情文字',
					create_time: '10月2日'
				},
				{
					title: '测试标题文字式样',
					desc: '测试详情文字测试详情文字测试详情文字',
					create_time: '10月2日'
				},
				{
					title: '测试标题文字式样',
					desc: '测试详情文字测试详情文字测试详情文字',
					create_time: '10月2日'
				}
			]
		};
	},
	methods: {
		open(item) {
			uni.navigateTo({
				url: '../msg-detail/msg-detail?detail=' + JSON.stringify(item)
			});
		}
	}
};
</script>

<style>
page {
	background-color: #eeeeee;
}
</style>
