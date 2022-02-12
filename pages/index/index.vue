<template>
	<view style="height: 100vh;display: flex;flex-direction: column;">
		<!-- #ifdef MP -->

		<!-- 自定义导航 -->
		<view class="d-flex a-center" style="height: 90rpx;">
			<!-- 左边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
			<!-- 中间 -->
			<view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;">
				<text class="iconfont icon-sousuo mx-2"></text>
				搜索输入
			</view>
			<!-- 右边 -->
			<view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-richscan_icon"></text></view>
		</view>
		<!-- #endif -->
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="border-bottom scroll-row" style="height: 80upx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
			<view
				class="scroll-row-item px-3"
				@click="changeTab(index)"
				style="height: 80rpx;line-height: 80rpx;"
				v-for="(item, index) in tabBars"
				:key="index"
				:class="tabIndex === index ? 'main-text-color' : ''"
				:id="'tab' + index"
			>
				<text class="font-md">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper :duration="150" :current="tabIndex" :style="'height:' + scrollH + 'px;'" @change="onChangeTab">
			<swiper-item v-for="(item, index) in newsitems" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore(index)">
					<block v-for="(list, listIndex) in item.list" :key="listIndex">
						<!-- 轮播图组件 -->
						<swiper-image v-if="list.type === 'swiper'" :resdata="list.data" />

						<template v-else-if="list.type === 'indexnavs'">
							<!-- 首页分类 -->
							<index-nav :resdata="list.data" />
							<divider />
						</template>

						<!-- 大图广告位 -->
						<!-- <card headTitle="每日精选" bodyCover="../../static/images/demo/demo4.jpg" /> -->
						<!-- 公共列表组件 -->
						<view class="row j-sb" v-else-if="list.type === 'list'">
							<block v-for="(item2, index2) in list.data" :key="index2"><common-list :item="item2" :index="index2" /></block>
						</view>
					</block>
					<!-- 上拉加载更多 -->
					<divider />
					<view class="d-flex a-center j-center text-light-muted font-md py-3">{{ item.loadtext }}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
// 模拟后端数据

let demo1 = [
	{
		type: 'swiper',
		data: [
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			}
		]
	},
	{
		type: 'indexnavs',
		data: [
			{ src: '../../static/images/indexnav/1.png', text: '新品发布' },
			{ src: '../../static/images/indexnav/2.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/3.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/4.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/5.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/6.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/7.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/8.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/9.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/10.gif', text: '新品发布' }
		]
	},
	{
		type: 'commonList',
		data: [
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
	}
];
let demo2 = [
	{
		type: 'swiper',
		data: [
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			},
			{
				src: '../../static/images/demo/demo4.jpg'
			}
		]
	},
	{
		type: 'indexnavs',
		data: [
			{ src: '../../static/images/indexnav/1.png', text: '新品发布' },
			{ src: '../../static/images/indexnav/2.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/3.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/4.gif', text: '新品发布' },
			{ src: '../../static/images/indexnav/5.gif', text: '新品发布' }
		]
	},
	{
		type: 'commonList',
		data: [
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
	}
];
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import card from '@/components/common/card.vue';
import commonList from '@/components/common/common-list.vue';
export default {
	components: {
		swiperImage,
		indexNav,
		card,
		commonList
	},
	data() {
		return {
			scrollint: '',
			scrollH: 500,
			tabIndex: 0,
			tabBars: [],
			newsitems: []
		};
	},
	onLoad() {
		// 获取可视区域高度`
		uni.getSystemInfo({
			success: res => {
				// #ifndef MP
				let navbarH = 0;
				// #endif

				// #ifdef MP
				let navbarH = uni.upx2px(90);
				// #endif
				this.scrollH = res.windowHeight - uni.upx2px(82) - navbarH;
			}
		});
		//初始化事件
		this.__init();
	},
	methods: {
		//初始化事件
		__init() {
			// 获取顶部选项卡
			this.$H.get('/index_category/data').then(res => {
				this.tabBars = res.category;
				//根据顶部选项卡生成页面
				let arr = [];
				for (var i = 0; i < this.tabBars.length; i++) {
					let firstLoad = i === 0 ? 'after' : 'before';
					let obj = {
						list: [],
						//1.上拉加载更多 2.加载中... 3.没有更多内容了。
						loadtext: '上拉加载更多',
						//首次加载：before加载前,after加载后
						firstLoad: firstLoad
					};
					//获取首屏数据
					if (i === 0) {
						obj.list = res.data;
					}

					arr.push(obj);
				}
				this.newsitems = arr;
			});
		},
		// 切换选项卡
		changeTab(index) {
			if (this.tabIndex === index) {
				return;
			}
			this.tabIndex = index;
			this.scrollinto = 'tab' + index;
			if (this.newsitems[index].firstLoad === 'after') {
				return;
			}
			this.addData();
		},
		// 临听滑动列表
		onChangeTab(e) {
			this.changeTab(e.detail.current);
		},
		// 加载数据
		async addData(callback = false) {
			//拿到当前索引
			let index = this.tabIndex;

			let obj = this.newsitems[index];
			//拿到当前分类id
			let id = this.tabBars[index].id;
			//拿到当前分类页数
			let page = Math.ceil(obj.list.length / 5) + 1;

			//请求数据
			let data = await this.$H.get('/index_category/' + id + '/data/' + page);
			//请求完数据
			console.log(data);
			obj.firstLoad = 'after';
			if (data) {
				//赋值
				obj.list = [...obj.list, ...data];
				obj.loadtext = data.length < 5 ? '没有更多了' : '上拉加载更多';
			}

			//执行回调函数
			if (typeof callback === 'function') {
				callback();
			}
		},
		// 上拉加载更多
		loadmore(index) {
			let item = this.newsitems[index];
			// 是否处于可加载状态
			if (item.loadtext !== '上拉加载更多') return;
			// 模拟加载
			item.loadtext = '加载中...';

			this.addData(() => {
				uni.showToast({
					title: '加载成功'
				});
			});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
