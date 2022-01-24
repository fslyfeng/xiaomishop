<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing:border-box ;">
		<scroll-view scroll-y="true" style="flex: 1;height: 100%;" class="border-right border-light-secondary">
			<view class="border-bottom border-light-secondary py-1" hover-class="bg-light-secondary" v-for="(item, index) in cate" :key="index" @tap="changeCate(index)">
				<view class="py-1 font-md text-muted text-center" :class="activeIndex === index ? 'class-active' : ''">{{ item.name }}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.5;height: 100%;">
			<view class="row" v-for="(item, index) in list" :key="index">
				<view class="span24-12 text-center py-2" v-for="(item2, index2) in item.list" :key="index2">
					<image :src="item2.src" style="width: 260upx;height: 260upx;"></image>
					<text class="d-block">{{ item2.name }}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//当前选中的分类
			activeIndex: 0,
			cate: [],
			list: []
		};
	},
	onLoad() {
		for (let i = 0; i < 20; i++) {
			this.cate.push({
				name: '分类' + i
			});
			this.list.push({
				list: [
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' },
					{ src: '/static/images/demo/list/5.jpg', name: '商品一' }
				]
			});
		}
	},

	methods: {
		changeCate(index) {
			this.activeIndex = index;
		}
	}
};
</script>

<style>
.class-active {
	border-left: 8upx solid #fd6801;
	color: #fd6801 !important;
}
</style>
