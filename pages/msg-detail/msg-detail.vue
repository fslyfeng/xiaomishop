<template>
	<view>
		<!-- 标题 -->
		<view class="font-lg text-dark mb-2 px-2">{{ detail.title }}</view>
		<!-- 内容 -->
		<view class="">
			<view class="py-4">
				<rich-text :nodes="nodes"></rich-text>
				<rich-text :nodes="strings"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//富文件加入商品详请
			nodes: [
				{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: blue; text-align:center;'
					},
					children: [
						{
							type: 'text',
							text: '商品详情!'
						}
					]
				}
			],
			strings:
				'<div style="text-align:center;"><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i4/12165322/O1CN01YNJqPl1pBWLWnzan5_!!12165322.png"/><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i2/12165322/TB2ELBlquySBuNjy1zdXXXPxFXa_!!12165322.png"/><img style="max-width: 100%;max-height: 100%;display: block;margin: auto;" src="https://img.alicdn.com/imgextra/i4/12165322/O1CN01fRpPsA1pBWOlo8mjI_!!12165322.png"/></div>',
			detail: {}
		};
	},
	onLoad(e) {
		if (!e.detail) {
			return uni.navigateBack({
				delta: 1
			});
		}
		//初始化数据

		this.detail = JSON.parse(e.detail);
		//设置页面标题

		uni.setNavigationBarTitle({
			title: this.detail.title
		});
	},
	methods: {}
};
</script>

<style></style>
