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
			<view class="flex-1 d-flex a-center j-center font-md"><text class="main-text-color" @tap="showDrawer">筛选</text></view>
		</view>
		<!-- 抽屉 -->

		<uni-drawer ref="showRight" mode="right" @close="closeDrawer()" :width="320">
			<card headTitle="服务" :headBorderBottom="false" :headTitleWeight="false">
				<!-- 单选按钮组 -->
				<zcm-radio-group :label="label" :selected.sync="label.selected"></zcm-radio-group>
			</card>

			<!-- 按钮 -->
			<view class="d-flex position-fixed bottom-0 right-0 w-100 border-top border-light-secondary">
				<view class="flex-1 main-bg-color text-white font-md py-2 text-center " hover-class="main-bg-hover-color">确定</view>
				<view class="flex-1 font-md py-2 text-center" hover-class="bg-light-secondary">重置</view>
			</view>
		</uni-drawer>
		<!-- 列表 -->
		<block v-for="(item, index) in list" :key="index"><search-list :item="item" :index="index"></search-list></block>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue';
import card from '@/components/common/card.vue';
import zcmRadioGroup from '@/components/common/radio-group.vue';
import price from '@/components/common/price.vue';
import searchList from '@/components/search-list/search-list.vue';
export default {
	components: {
		uniDrawer,
		card,
		zcmRadioGroup,
		price,
		searchList
	},
	data() {
		return {
			list: [
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				},
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				},
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				},
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				},
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				},
				{
					title: '不锈钢拉杆',
					titlepic: '/static/images/demo/demo6.jpg',
					desc: '产品简介|产品简介|产品简介|产品简介|产品简介',
					pprice: '1200',
					comment_num: '1000 条评论',
					good_num: '98%'
				}
			],
			screen: {
				currentIndex: 0,
				list: [{ name: '综合', status: 1 }, { name: '销量', status: 0 }, { name: '价格', status: 0 }]
			},
			label: {
				selected: 0,
				list: [
					{
						name: '选项一'
					},
					{
						name: '选项二'
					},
					{
						name: '选项三'
					},
					{
						name: '选项四'
					}
				]
			}
		};
	},
	methods: {
		showDrawer() {
			this.$refs.showRight.open();
		},
		closeDrawer() {
			this.$refs.showRight.close();
		},
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

<style>
.radio-active {
	background: #fce0d5 !important;
	color: #eb7320 !important;
	border-color: #eb7320 !important;
}
</style>
