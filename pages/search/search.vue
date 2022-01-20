<template>
	<view>
		<card headTitle="热门搜索" bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2"><color-tag :item="item" v-for="(item, index) in hot" :key="index"></color-tag></view>
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
			hot: [{ name: '拉手' }, { name: '滑轮' }, { name: '合页' }, { name: '拉手' }, { name: '滑轮' }, { name: '合页' }, { name: '拉手' }, { name: '滑轮' }, { name: '合页' }]
		};
	},

	methods: {}
};
</script>

<style></style>
