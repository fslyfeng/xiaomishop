<template>
	<view>
		<uni-nav-bar statusBar="true" :border="false" :shadow="false">
			<view slot="left"><uni-icons class="text-light-muted" type="closeempty" size="20" @click="goBack()"></uni-icons></view>
			<view slot="right" class="text-light-muted">忘记密码</view>
		</uni-nav-bar>

		<view class="p-5">
			<view class="font-big mb-5">密码登录</view>
			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请输入手机号/邮箱/帐号" />
			<input type="text" class="border-bottom mb-4 uni-input px-0" placeholder="请输入密码" />
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" hover-class="main-bg-hover-color">登陆</view>

			<label class="checkbox d-flex a-center">
				<checkbox value="" style="transform:scale(0.7)" />
				<text class="text-light-muted font">已阅读并同意协议</text>
			</label>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		goBack() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style></style>
