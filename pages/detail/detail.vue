<template>
	<!-- 商品详情页面 -->
	<view>
		<!-- 商品详情大图 -->
		<swiper-image :resdata="banners" height="750" preview></swiper-image>
		<!-- 基础详情 -->
		<base-info :detail="detail" :show-price="showPrice"></base-info>
		<!-- 滚动商品特性 w170*h100 -->
		<scroll-attrs :baseAttrs="baseAttrs"></scroll-attrs>
		<!-- 属性选择 -->
		<view class="p-2">
			<uni-tag text="标签" type="primary" class="m-1"></uni-tag>
			<uni-tag text="标签" type="error" :circle="true" class="m-1"></uni-tag>
		</view>

		<!-- 横向滚动评论 -->
		<!-- 商品详情 -->
		<view class="py-4">
			<rich-text :nodes="nodes"></rich-text>
			<rich-text :nodes="strings"></rich-text>
		</view>

		<!-- 热门推荐 -->
		<card headTitle="热门推荐" :headTitleWeight="false">
			<view class="row j-sb">
				<block v-for="(item, index) in hotList" :key="index"><commonList :item="item" :index="index"></commonList></block>
			</view>
		</card>
		<!-- 底部操作条 -->
		<bottom-btn></bottom-btn>
	</view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import price from '@/components/common/price.vue';
import baseInfo from '@/components/detail/base-info.vue';
import scrollAttrs from '@/components/detail/scroll-attrs.vue';
import card from '@/components/common/card.vue';
import commonList from '@/components/common/common-list.vue';
import bottomBtn from '@/components/detail/bootom-btn.vue';

export default {
	components: {
		swiperImage,
		baseInfo,
		scrollAttrs,
		card,
		commonList,
		bottomBtn
	},
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
			banners: [],
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
			],
			hotList: [
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
	computed: {
		showPrice() {
			return this.detail.min_oprice || 0.0;
		}
	},
	onLoad(e) {
		if (e.detail) {
			this.__init(JSON.parse(e.detail));
		}
	},
	methods: {
		// 初始化页面
		__init(data) {
			this.$H.get('/goods/' + data.id).then(res => {
				//轮播图
				this.banners = res.goodsBanner.map(v => {
					return {
						src: v.url
					};
				});
				//初始化基本信息
				this.detail = res;
				//滚动商品属性
				this.baseAttrs = res.goodsAttrs.map(v => {
					return {
						icon: 'icon-cpu',
						title: v.name,
						desc: v.value
					};
				});
			});
		}
	}
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
