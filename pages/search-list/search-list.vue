<template>
	<view>
		<!-- 搜索列表 -->

		<!-- 排序|筛选 -->
		<view class="d-flex border-top border-bottom a-center" style="height: 100upx;">
			<view class="flex-1 d-flex a-center j-center font-md" v-for="(item, index) in screen.list" :key="index" @tap="changeScreen(index)">
				<text :class="screen.currentIndex === index ? 'main-text-color' : 'text-muted'">{{ item.name }}</text>
				<view>
					<view class="iconfont icon-paixu-shengxu line-h0" :class="item.status === 1 ? 'main-text-color' : ' text-light-muted'"></view>
					<view class="iconfont icon-paixu-jiangxu line-h0" :class="item.status === 2 ? 'main-text-color' : ' text-light-muted'"></view>
				</view>
			</view>
			<view class="flex-1 d-flex a-center j-center font-md"><text class="main-text-color">筛选</text></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			screen: {
				currentIndex: 0,
				list: [{ name: '综合', status: 1 }, { name: '销量', status: 0 }, { name: '价格', status: 0 }]
			}
		};
	},
	methods: {
		changeScreen(index) {
			//判断当前点击是否已经是激活状态
			let oldIndex = this.screen.currentIndex;
			let oldItem = this.screen.list[oldIndex];
			if (oldIndex === index) {
				return (oldItem.status = oldItem.status === 1 ? 2 : 1);
			}
			let newIndex = this.screen.list[index];
			//移除旧的激活状态
			oldItem.status = 0;
			this.screen.currentIndex = index;
			//增加新激活状态
			newIndex.status = 1;
		}
	}
};
</script>

<style></style>
