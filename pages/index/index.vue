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
		<view class="row j-sb pb-5">
			<block v-for="(item, index) in commonList" :key="index"><commonList :item="item" :index="index"></commonList></block>
		</view>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import card from '@/components/common/card.vue';
import commonList from '@/components/common/common-list.vue';
export default {
	components: {
		swiperImage,
		indexNav,
		card,
		commonList
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
			],
			commonList: [
				{
					cover: '/static/images/demo/list/1.jpg',
					title: '米家空调',
					desc: '产品编码',
					oprice: 1299,
					pprice: 1199
				},
				{
					cover: '/static/images/demo/list/1.jpg',
					title: '米家空调',
					desc: '产品编码',
					oprice: 1599,
					pprice: 1199
				},
				{
					cover: '/static/images/demo/list/1.jpg',
					title: '米家空调',
					desc: '产品编码',
					oprice: 1699,
					pprice: 1199
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
