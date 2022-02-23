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
		<template v-if="historyList.length > 0">
			<!-- 分割线 -->
			<divider />
			<!-- 搜索记录 -->
			<card headTitle="搜索记录">
				<view slot="right" class="font text-light-muted" @click="clearHistory">清除搜索记录</view>
				<uni-list-item v-for="(item,index) in historyList" :key="index" :title="item" :showArrow="false"
					@click="quickSearch(item)"></uni-list-item>
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
				historyList: [],
				keyword: "",
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

		onShow() {
			// 加载历史记录
			let history = uni.getStorageSync('searchHistory')
			this.historyList = history ? JSON.parse(history) : []
		},
		onLoad() {
			// 加载历史记录
			let history = uni.getStorageSync('searchHistory')
			this.historyList = history ? JSON.parse(history) : []
		},
		methods: {
			search() {
				if (this.keyword === '') {
					return uni.showToast({
						title: '关键词不能为空',
						icon: 'none'
					});
				}
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif				
				uni.navigateTo({
					url: '../search-list/search-list?keyword=' + this.keyword
				});

				setTimeout(() => {
					this.addHistory()
				}, 500)
			},
			//加入搜索记录
			addHistory() {
				let index = this.historyList.indexOf(this.keyword)
				if (index === -1) {
					this.historyList.unshift(this.keyword)
				} else {
					this.historyList.unshift(this.historyList.splice(index, 1)[0])
				}
				// 移除最后一条
				if (this.historyList.length > 6) {
					this.historyList.splice(this.historyList.length - 1, 1)
				}
				uni.setStorageSync('searchHistory', JSON.stringify(this.historyList))
			},
			//清除搜索记录
			clearHistory() {
				uni.showModal({
					title: '提示',
					content: '是否要清除搜索历史记录？',
					// showCancel: false,
					cancelText: '取消',
					confirmText: '确认清除',
					success: res => {
						if (res.confirm) {
							uni.clearStorageSync()
							this.historyList = []
						}
					},
				});
			}
		}
	};
</script>

<style></style>
