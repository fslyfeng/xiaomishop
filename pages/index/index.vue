<template>
	<view class="pb-5">
		<!-- 轮播图组件 swiper-image.vue-->
		<swiper-image :resdata="swipers" />
		<!-- 首页分类 -->
		<index-nav :resdata="indexnavs" />
		<!-- 全局分割线 -->
		<divider />
		<!-- 大图广告位 -->
		<card headTitle="每日精选" bodyCover="../../static/images/demo/demo4.jpg" />
		<!-- 公共列表组件 -->
		<view class="row pb-5">
			<view style="width:373.5upx;">
				<image src="/static/images/demo/list/1.jpg" mode="widthFix" lazy-load></image>
				<view class="p-2 pt-1">
					<view class="font-md">米家空调</view>
					<text class="d-block font text-light-muted">产品简介</text>
					<view class="d-flex my-1">
						<view class="d-flex main-text-color font-md line-h">
							<text class="a-self-start font-sm">¥</text>
							100
						</view>
						<view class="font-sm text-light-muted line-through ml-1 a-self-end line-h">¥200</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import card from '@/components/common/card.vue';
export default {
	components: {
		swiperImage,
		indexNav,
		card
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
			],
			indexnavs: [
				{ src: '../../static/images/indexnav/1.png', text: '新品发布' },
				{ src: '../../static/images/indexnav/2.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/3.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/4.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/5.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/6.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/7.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/8.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/9.gif', text: '新品发布' },
				{ src: '../../static/images/indexnav/10.gif', text: '新品发布' }
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
