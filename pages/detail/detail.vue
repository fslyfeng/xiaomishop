<template>
	<view>
		<!-- 商品详情页面 -->
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
		<!-- 基础详情 -->
		<view class="p-2">
			<view class="font-lg">{{ detail.title }}</view>
			<view class="font text-light-muted mb-3 line-h-sm">{{ detail.desc }}</view>
			<price priceSize="font-lg" unitSize="font">{{ detail.pprice }}</price>
		</view>
		<!-- 滚动商品特性 -->
		<!-- 横向滚动评论 -->
		<!-- 商品详情 -->
		<!-- 热门推荐 -->
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import price from '@/components/common/price.vue';
export default {
	components: { swiperImage, price },
	data() {
		return {
			banners: [
				{
					src: '/static/images/pic/LQ01/00001_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00002_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00003_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00004_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00005_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00006_.jpg'
				},
				{
					src: '/static/images/pic/LQ01/00007_.jpg'
				}
			],
			detail: {
				title: '多功能电动直升机',
				desc: '内置功格兰场16W洗衣干衣机、内置功格兰场16W洗衣干衣机、内置功格兰场16W洗衣干衣机、内置功格兰场16W洗衣干衣机',
				pprice: 3299
			}
		};
	},
	methods: {}
};
</script>

<style></style>
