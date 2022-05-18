<template>
	<view>
		<uni-nav-bar statusBar="true" :border="false" :shadow="false">
			<view slot="left"><uni-icons class="text-light-muted" type="closeempty" size="20" @click="goBack()"></uni-icons></view>
			<view slot="right" class="text-light-muted">忘记密码</view>
		</uni-nav-bar>

		<view class="p-5">
			<view class="font-big mb-5">密码登录</view>
			<input
				type="text"
				class="border-bottom mb-4 uni-input px-0"
				placeholder="请输入手机号/邮箱/帐号"
				v-model="username"
				@focus="focus('username')"
				@blur="blur('username')"
				:class="focusClass.username ? 'input-border-color' : ''"
			/>
			<input
				type="text"
				class="border-bottom mb-4 uni-input px-0"
				placeholder="请输入密码"
				v-model="password"
				@focus="focus('password')"
				@blur="blur('password')"
				:class="focusClass.password ? 'input-border-color' : ''"
			/>
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4" hover-class="main-bg-hover-color" @click="submit">登陆</view>

			<label class="checkbox d-flex a-center" @click="check = !check">
				<checkbox value="" style="transform:scale(0.7)" :checked="check" />
				<text class="text-light-muted font">已阅读并同意协议</text>
			</label>
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	data() {
		return {
			username: '',
			password: '',
			check: false,
			//验证规则
			rules: {
				username: [
					// {
					// 	rule: /^[a-zA-Z]\w{5,17}$/,
					// 	msg: '账号请以字母开头，长度在6-18之间，只能包含字母，数字和下划线'
					// }
				],
				password: [
					{
						rule: /^.{5,20}$/,
						msg: '密码长度应为5-20的所有字符'
					}
				]
			},
			focusClass: {
				username: false,
				password: false
			}
		};
	},

	methods: {
		...mapMutations(['login']),
		goBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		//表单验证
		validate(key) {
			var check = true;
			this.rules[key].forEach(v => {
				//验证失败
				if (!v.rule.test(this[key])) {
					uni.showToast({
						title: v.msg,
						icon: 'none'
					});
					check = false;
					return false;
				}
			});
			return check;
		},

		// 提交表单
		submit() {
			if (!this.check) {
				return uni.showToast({
					title: '请同意协议',
					icon: 'none'
				});
			}
			//验证用户名
			if (!this.validate('username')) return;
			//验证密码
			if (!this.validate('password')) return;
			console.log('提交成功');

			// uni.showLoading({
			// 	title: '登录中....',
			// 	mask: true
			// });
			this.$H
				.post('/login', {
					username: this.username,
					password: this.password
				})
				.then(res => {
					//状态存储
					this.login(res);
					uni.hideLoading();
					uni.showToast({
						title: '登陆成功！'
					});
					uni.navigateBack({
						delta: 1
					});
				});
		},
		focus(key) {
			this.focusClass[key] = true;
		},
		blur(key) {
			this.focusClass[key] = false;
		}
	}
};
</script>

<style></style>
