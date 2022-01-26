<template>
	<view>
		<card headTitle="热门搜索" bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2"><color-tag :item="item" v-for="(item, index) in hot" :key="index"></color-tag></view>

		<!-- 常用分类 -->
		<card headTitle="常用分类" :bodyPadding="true" :headBorderBottom="false">
			<color-tag :item="item" v-for="(item, index) in cate" :key="index" :color="false"></color-tag>
		</card>
		<!-- 分割线 -->
		<divider />
		<!-- 搜索记录 -->
		<card headTitle="搜索记录">
			<uni-list>
				<uni-list-item title="不锈钢拉杆"></uni-list-item>
				<uni-list-item title="拉手套装"></uni-list-item>
			</uni-list>
		</card>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
import colorTag from '@/components/search/color-tag.vue';

export default {
	components: {
		card,
		colorTag
	},
	data() {
		return {
			hot: [
				{ name: '拉手套件' },
				{ name: '滑轮' },
				{ name: '合页' },
				{ name: '拉手' },
				{ name: '滑轮' },
				{ name: '合页' },
				{ name: '拉手' },
				{ name: '滑轮' },
				{ name: '合页' }
			],
			cate: [{ name: '拉杆套件' }, { name: '滑轮' }, { name: '合页' }, { name: '拉手' }]
		};
	},
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			uni.navigateTo({
				url: '../search-list/search-list'
			});
		}
	},
	methods: {}
};
</script>

<style></style>
