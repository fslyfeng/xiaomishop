<template>
	<view>
		<divider></divider>
		<uni-list >
			<uni-list-item title="头像">
				<block slot="footer">
					<image src="../../static/images/demo/demo6.jpg" style="height: 90rpx;width: 90rpx;" class="rounded-circle border border-light-secondary "></image>
				</block>
			</uni-list-item>
			<uni-list-item title="姓名" ><block slot="footer">ying</block></uni-list-item>
			<uni-list-item title="性别"></uni-list-item>
			<uni-list-item title="生日"></uni-list-item>
			<divider></divider>
			<uni-list-item title="修改密码"></uni-list-item>
			<uni-list-item title="修改密码"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
