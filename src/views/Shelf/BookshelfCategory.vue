<template>
	<section class="bookshelf-category">
		<transition-group name="list" tag="div" class="bc-list">
			<item-of-book
				class="bc-list-item"
				v-for="(book, index) in cateBooks"
				@gotoDetail="gotoDetail(book)"
				:book="book"
				:index="index"
				:key="book.id" />
		</transition-group>
	</section>
</template>

<script>
	
	import ItemOfBook from '@/components/Shelf/components/ItemOfBook'
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookshelfCategory',
		mixins: [shelfMixin],
		components: {
			ItemOfBook
		},
		computed: {
			cateBooks() {
				return this.shelfBooks[this.$route.query.shelfIndex].books
			}
		},
		methods: {
			gotoDetail(book) {
				this.$router.push({
					path: '/detail',
					query: {
						fileName: book.fileName,
						shelfIndex: this.$route.query.shelfIndex
					}
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.bookshelf-category
		width 100%
		height 100%
		box-sizing border-box
		padding 1rem
		
		.bc-list
			display flex
			flex-wrap wrap
			
			.bc-list-item
				width 33.33%
				box-sizing border-box
				padding 1rem

</style>
