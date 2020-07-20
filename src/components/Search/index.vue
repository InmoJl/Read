<template>
  <div class="search"
		:class="{
			'shrink-height': !titleBarVisible,
			'show-search-page': searchPageVisible
		}">
		<search-bar @resetSearchPage="$refs.searchPage.resetScroll()" />
		<search-page ref="searchPage" />
	</div>
</template>

<script>
	
	import SearchBar from './SearchBar'
	import SearchPage from './SearchPage'
	
	import { storeMixin } from '@/utils/mixin'
	
	export default {
		name: 'Search',
		mixins: [storeMixin],
		components: {
			SearchBar,
			SearchPage
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.search
		width 100%
		height 9rem
		display flex
		flex-direction column
		transition height .4s
	
	.shrink-height
		height 5rem
	
	.show-search-page
		height 100%
	
	
</style>
