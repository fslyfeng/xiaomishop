<template>
	<view>
		<card headTitle="热门搜索" bodyCover="../../static/images/demo/search-banner.png"></card>
		<!-- 多色按钮 -->
		<view class="px-1 mb-2">
			<color-tag :item="item" v-for="(item, index) in hot" :key="index"></color-tag>
		</view>

		<!-- 常用分类 -->
		<card headTitle="常用分类" :bodyPadding="true" :headBorderBottom="false">
			<color-tag :item="item" v-for="(item, index) in cate" :key="index" :color="false"></color-tag>
		</card>
		<template v-if="historyList.length>0">
			<!-- 分割线 -->
			<divider />
			<!-- 搜索记录 -->
			<card headTitle="搜索记录">
				<uni-list>
					<uni-list-item v-for="(item,index) in historyList" :key="index" :title="item"></uni-list-item>
				</uni-list>
			</card>
		</template>
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
				historyList: ["不锈钢", "合金"],
				keyword: [],
				hot: [{
						name: '拉手套件'
					},
					{
						name: '滑轮'
					},
					{
						name: '合页'
					},
					{
						name: '拉手'
					},
					{
						name: '滑轮'
					},
					{
						name: '合页'
					},
					{
						name: '拉手'
					},
					{
						name: '滑轮'
					},
					{
						name: '合页'
					}
				],
				cate: [{
					name: '拉杆套件'
				}, {
					name: '滑轮'
				}, {
					name: '合页'
				}, {
					name: '拉手'
				}]
			};
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateTo({
					url: '../search-list/search-list'
				});
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.keyword = e.text
		},
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		onNavigationBarButtonTap() {
			this.search()
		},
		methods: {
			search() {
				if (this.keyword === '') {
					return uni.showToast({
						title: '输入搜索关键词为空！',
						icon: 'none'
					})
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
			}
		}
	};
</script>

<style></style>
