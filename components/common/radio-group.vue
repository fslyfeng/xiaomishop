<template>
	<view class="row">
		<view class="span24-8 px-2 mb-2" v-for="(item, index) in label.list" :key="index">
			<view
				class="rounded py-1 bg-light-secondary text-center border"
				:class="label.selected === index ? 'radio-active' : 'border-light-secondary'"
				@tap="changeRadio(index)"
			>
				{{ item.name }}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		label: Object
	},
	methods: {
		changeRadio(index) {
			this.$emit('update:selected', index);
		}
	}
};
</script>

<style></style>
