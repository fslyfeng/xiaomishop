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
		<view class="py-4"><u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate" noData="正在加载中..."></u-parse></view>
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
import uParse from '@/components/u-parse/u-parse.vue';

export default {
	components: {
		swiperImage,
		baseInfo,
		scrollAttrs,
		card,
		commonList,
		bottomBtn,
		uParse
	},
	data() {
		return {
			//富文件加入商品详请
			context: '',
			banners: [],
			baseAttrs: [],
			detail: [],
			hotList: []
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
		preview(src, e) {
			// do something
		},
		navigate(href, e) {
			// do something
		},
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
				//修改页面标题
				uni.setNavigationBarTitle({
					title: res.title
				});
				//滚动商品属性
				this.baseAttrs = res.goodsAttrs.map(v => {
					return {
						icon: 'icon-cpu',
						title: v.name,
						desc: v.value
					};
				});
				//商品详情
				this.context = res.content;
				//热门推荐
				this.hotList = res.hotList.map(v => {
					return {
						id: v.id,
						cover: v.cover,
						desc: v.desc,
						oprice: v.min_oprice,
						pprice: v.min_price
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
