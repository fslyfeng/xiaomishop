<template>
	<view>
		<!-- 轮播图组件 swiper-image.vue-->
		<swiper-image :resdata="swipers" />
		<index-nav :resdata="indexnavs" />
		<divider />
		<!-- 大图广告位 -->
		<card headTitle="每日精选" bodyCover="../../static/images/demo/demo4.jpg" />
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
