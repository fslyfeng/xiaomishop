<template>
	<view>
		<!-- 轮播图组件 swiper-image.vue-->
		<swiper-image :resdata="swipers"></swiper-image>
		<!-- 首页分类 -->
		<view class="row j-center py-2 m-2">
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
			<view class="span-4 d-flex flex-column j-center a-center py-1">
				<image src="/static/images/indexnav/1.png" style="width:60upx;height: 60upx;" mode="widthFix"></image>
				<text class="font-sm">新品发布</text>
			</view>
		</view>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
export default {
	components: {
		swiperImage
	},
	data() {
		return {
			swipers: [
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				},
				{
					src: '../../static/images/demo/demo4.jpg'
				}
			]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
