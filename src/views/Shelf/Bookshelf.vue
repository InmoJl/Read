<template>
	<section class="bookshelf">
		<bookshelf-list />
	</section>
</template>

<script>
	
	import BookshelfList from '@/components/Shelf/BookshelfList'
	
	import { shelf } from '@/api'
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'Bookshelf',
		mixins: [shelfMixin],
		data() {
			return {
				list: []
			}
		},
		components: {
			BookshelfList
		},
		mounted() {
			if (this.shelfBooks.length > 0) return
			
			shelf().then(({ data }) => this.setShelfBooks(data.bookList))
		},
		destroyed() {
			console.log('bookshelf destroyed');
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.bookshelf
		width 100%
		height 100%
		font-size 1.8rem
		position relative
		background-color #fff
	
</style>
