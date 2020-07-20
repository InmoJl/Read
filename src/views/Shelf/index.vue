<template>
	<section class="shelf">
		<bookshelf-topbar></bookshelf-topbar>
		<div class="shelf-view">
			<transition :name="transitionName">
				<keep-alive exclude="BookshelfCategory">
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
		<bookshelf-bottombar />
	</section>
</template>

<script>
	
	import BookshelfTopbar from '@/components/Shelf/BookshelfTopbar'
	import BookshelfBottombar from '@/components/Shelf/BookshelfBottombar'

	export default {
		name: 'Shelf',
		data() {
			return {
				transitionName: 'page-go'
			}
		},
		components: {
			BookshelfBottombar,
			BookshelfTopbar
		},
		watch: {
			$route(to, from) {
				if (to.meta.index > from.meta.index)
					this.transitionName = 'page-go'
				else
					this.transitionName = 'page-back'
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.shelf
		width 100%
		height 100%
		position relative
		display flex
		flex-direction column
	
		.shelf-view
			flex 1
			width 100%
			overflow hidden auto
			position relative
	
</style>
