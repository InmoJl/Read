<template>
	<div class="detail-topbar">
		<div class="dt-icon-wrap" @click="onBack">
			<i class="iconfont icon-back"></i>
		</div>
		<div class="dt-icon-wrap">
			<i class="iconfont icon-bookshelf"></i>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'DetailTopbar',
		methods: {
			onBack() {
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail-topbar
		display flex
		justify-content space-between
		padding 0 1rem
		line-height 5rem
	
		.iconfont
			font-size 2.4rem
	
</style>
