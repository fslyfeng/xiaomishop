<template>
	<view>
		<!-- 头部 -->
		<view class="position-relative d-flex a-center " style="height: 320rpx;">
			<view class="iconfont icon-xiaoxi position-absolute text-white" style="font-size: 50rpx;top: 75rpx;right:20rpx;z-index: 100;"></view>
			<image src="../../static/images/bg.jpg" style="height: 320rpx;width: 100%;"></image>
			<view class="d-flex a-center position-absolute left-0 right-0" style="bottom: 50rpx;">
				<image src="../../static/images/demo/demo6.jpg" style="height: 145rpx;width: 145rpx;border: 5rpx solid;" class="rounded-circle border-light ml-4"></image>
				<view class="ml-2 text-white font-md">用户名称</view>
				<view
					class="d-flex a-center j-center a-self-end ml-auto px-2"
					style="height: 70rpx;background: #FFD43F;color: #CC4A00;border-top-left-radius: 40rpx;border-bottom-left-radius: 40rpx;"
				>
					<view class="line-h iconfont icon-huangguan mr-1"></view>
					会员积份 1.99
				</view>
			</view>
		</view>

		<card>
			<view slot="title" class="d-flex a-center j-sb">
				<text class="font-md font-weight p-2" hover-class="bg-light-secondary">我的订单</text>
				<view class="text-secondary py-2 font">
					全部订单
					<text class="iconfont icon-you font"></text>
				</view>
			</view>

			<!-- 图标分类 -->
			<view class="d-flex a-center">
				<view class="flex-1 d-flex flex-column a-center j-center py-3" hover-class="bg-light-secondary" v-for="i in 4" :key="i">
					<view class="iconfont icon-cpu font-lg line-h"></view>
					<view>侍付款</view>
				</view>
			</view>
		</card>
		<divider />
		<uni-list>
			<uni-list-item :show-extra-icon="true" :extra-icon="{ color: '#FDBF2E', size: '22', type: 'contact' }" title="会员中心"></uni-list-item>
			<uni-list-item :show-extra-icon="true" :extra-icon="{ color: '#FCBE2D', size: '22', type: 'shop' }" title="服务中心"></uni-list-item>
			<uni-list-item :show-extra-icon="true" :extra-icon="{ color: '#9ED45A', size: '22', type: 'settings' }" title="更多功能" @click="navigate('class')"></uni-list-item>
			<divider />
			<uni-list-item :show-extra-icon="true" :extra-icon="{ color: '#4cd964', size: '22', type: 'gear' }" title="更多设置" to="/pages/user-set/user-set"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
export default {
	components: {
		card
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
