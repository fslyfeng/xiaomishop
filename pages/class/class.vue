<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing:border-box ;">
		<loading :show="showLoading"></loading>
		<scroll-view id="leftScroll" scroll-y="true" style="flex: 1;height: 100%;" class="border-right border-light-secondary" :scroll-top="leftScrollTop">
			<view
				class="border-bottom border-light-secondary py-1 left-scroll-item"
				hover-class="bg-light-secondary"
				v-for="(item, index) in cate"
				:key="index"
				@tap="changeCate(index)"
			>
				<view class="py-1 font-md text-muted text-center" :class="activeIndex === index ? 'class-active' : ''">{{ item.name }}</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.5;height: 100%;" :scroll-top="RightScrollTop" :scroll-with-animation="true" @scroll="onRightScroll">
			<view class="row right-scroll-item" v-for="(item, index) in list" :key="index">
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
			showLoading: true,
			//当前选中的分类
			activeIndex: 0,
			cate: [],
			list: [],
			leftDomsTop: [],
			RightDomsTop: [],
			RightScrollTop: 0,
			leftScrollTop: 0,
			cateItemHeight: 0
		};
	},
	watch: {
		async activeIndex(newValue, oldValue) {
			//获取scroll-view高度，scrollTop
			let data = await this.getElInfo({
				size: true,
				scrollOffset: true
			});
			let H = data.height;
			let ST = data.scrollTop;
			//下边
			if (this.leftDomsTop[newValue] + this.cateItemHeight > H + ST) {
				return (this.leftScrollTop = this.leftDomsTop[newValue] + this.cateItemHeight) - H;
			}
			//上边
			if (ST > this.cateItemHeight) {
				this.leftScrollTop = this.leftDomsTop[newValue];
			}
		}
	},
	onLoad() {
		this.getData();
	},
	onReady() {
		this.getElInfo({
			all: 'left',
			size: true,
			rect: true
		}).then(data => {
			this.leftDomsTop = data.map(v => {
				this.cateItemHeight = v.height;
				return v.top;
			});
		});

		this.getElInfo({
			all: 'right',
			size: false,
			rect: true
		}).then(data => {
			this.RightDomsTop = data.map(v => v.top);
		});
	},
	methods: {
		//获取节点信息
		getElInfo(obj = {}) {
			return new Promise((res, rej) => {
				let option = {
					size: obj.size ? true : false,
					rect: obj.rect ? true : false,
					scrollOffset: obj.scrollOffset ? true : false
				};
				const query = uni.createSelectorQuery().in(this);
				let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`) : query.select('.leftScroll');
				q.fields(option, data => {
					res(data);
				}).exec();
			});
		},
		getData() {
			for (let i = 0; i < 20; i++) {
				this.cate.push({
					name: '分类' + i
				});
				this.list.push({
					list: []
				});
			}
			for (let i = 0; i < this.list.length; i++) {
				for (var j = 0; j < 24; j++) {
					this.list[i].list.push({ src: '/static/images/demo/list/5.jpg', name: `分类${i}-商品${j}` });
				}
			}
			//加载数据成功后隐藏动画
			this.$nextTick(() => {
				this.showLoading = false;
			});
		},
		//点击左边分类
		changeCate(index) {
			this.activeIndex = index;
			//右边scroll-view 滚动到对应的区块
			this.RightScrollTop = this.RightDomsTop[index];
		},
		// 监听右边滚动事件
		async onRightScroll(e) {
			// console.log(e.detail.scrollTop);
			//匹配当前scrollTop所处的索引
			this.RightDomsTop.forEach((v, k) => {
				if (v < e.detail.scrollTop) {
					this.activeIndex = k;
					return false;
				}
			});
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
