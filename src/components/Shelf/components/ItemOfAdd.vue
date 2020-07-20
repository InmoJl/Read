<template>
	<div class="item-of-add">
		<div class="ioa-content"
			:style="{ height: itemHeight }"
			@click="gotoStore">+</div>
	</div>
</template>

<script>
	
	export default {
		name: 'ItemOfAdd',
		computed: {
			itemHeight() {
				const itemWidth = Math.floor((window.innerWidth - 80) / 3 * 10) / 10
				return ((itemWidth / 0.714) | 0)+ 'px'
			}
		},
		methods: {
			gotoStore() {
				this.$router.push('/store')
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.item-of-add
		width 33.33%
		box-sizing border-box
		padding 1rem
		
		.ioa-content
			width 100%
			height 100%
			display flex
			align-items center
			justify-content center
			border 1px solid #ccc
			font-size 4rem
			color #ccc
			font-weight 100
	
</style>
