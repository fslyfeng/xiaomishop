<template>
	<!-- 商品详情页面 -->
	<view>
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail"></base-info>
		<!-- 滚动商品特性 w170*h100 -->
		<scroll-attrs :baseAttrs="baseAttrs"></scroll-attrs>
		<!-- 属性选择 -->
		<view class="p-2">
			<uni-tag text="标签" type="primary" class="m-1"></uni-tag>
			<uni-tag text="标签" type="error" :circle="true" class="m-1"></uni-tag>
		</view>

		<!-- 横向滚动评论 -->
		<!-- 商品详情 -->
		<view class="py-4" style="background:#FFF; padding:20rpx;"><rich-text :nodes="nodes"></rich-text></view>
		<view class="py-4" style="width: 750upx;height: 750upx;"><rich-text :nodes="strings"></rich-text></view>
		<!-- 热门推荐 -->
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import price from '@/components/common/price.vue';
import baseInfo from '@/components/detail/base-info.vue';
import scrollAttrs from '@/components/detail/scroll-attrs.vue';

export default {
	components: { swiperImage, baseInfo, scrollAttrs },
	data() {
		return {
			//富文件加入商品详请
			nodes: [
				{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: blue; text-align:center;'
					},
					children: [
						{
							type: 'text',
							text: '商品详情!'
						}
					]
				}
			],
			strings:
				'<div style="text-align:center;"><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i4/12165322/O1CN01YNJqPl1pBWLWnzan5_!!12165322.png"/><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i2/12165322/TB2ELBlquySBuNjy1zdXXXPxFXa_!!12165322.png"/><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i4/12165322/O1CN01fRpPsA1pBWOlo8mjI_!!12165322.png"/></div>',
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
			},
			baseAttrs: [
				{
					icon: 'icon-cpu',
					title: '产品颜色',
					desc: '灰色'
				},
				{
					icon: 'icon-cpu',
					title: '产品颜色',
					desc: '灰色'
				},
				{
					icon: 'icon-cpu',
					title: '产品颜色',
					desc: '灰色'
				},
				{
					icon: 'icon-cpu',
					title: '产品颜色',
					desc: '灰色'
				},
				{
					icon: 'icon-cpu',
					title: '产品颜色',
					desc: '灰色'
				}
			]
		};
	},
	methods: {}
};
</script>

<style>
.chat-custom-right {
	flex: 1;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
}

.chat-custom-text {
	font-size: 12px;
	color: #999;
}
</style>
