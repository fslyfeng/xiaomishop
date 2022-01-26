<template>
	<view>
		<!-- 商品详情页面 -->
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
export default {
	components: { swiperImage },
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
			]
		};
	},
	methods: {}
};
</script>

<style></style>
