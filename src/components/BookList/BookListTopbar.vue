<template>
	<div class="book-list-topbar">
		<span class="blt-back-wrap" @click="onBack">
			<i class="iconfont icon-back"></i>
		</span>
		<p class="blt-count">{{ count }} 本图书</p>
		<span class="blt-bookshelf-wrap"><i class="iconfont icon-bookshelf"></i></span>
	</div>
</template>

<script>
	
	export default {
		name: 'BookListTopbar',
		props: {
			count: [Number]
		},
		methods: {
			onBack() {
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.book-list-topbar
		display flex
		justify-content space-between
		padding 0 1rem
		line-height 5rem
		
		.blt-count
			font-size 1.8rem
	
		.iconfont
			font-size 2.4rem
	
</style>
