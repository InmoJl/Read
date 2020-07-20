<template>
	<div class="search-page">
		<search-page-hot />
		<search-page-history />
	</div>
</template>

<script>
	
	import SearchPageHot from './SearchPageHot'
	import SearchPageHistory from './SearchPageHistory'
	
	export default {
		name: 'SearchPage',
		components: {
			SearchPageHot,
			SearchPageHistory
		},
		methods: {
			resetScroll() {
				this.$el.scrollTo(0, 0)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.search-page
		width 100%
		flex 1
		box-sizing border-box
		padding 0 1rem
		background-color #fff
		overflow hidden auto
		transition .4s
		
		&::-webkit-scrollbar
			width 0
	
</style>
