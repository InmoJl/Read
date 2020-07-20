<template>
	<section class="book-list">
		<book-list-topbar :count="count" />
		<book-list-content v-if="bookList.length" :data="bookList" />
	</section>
</template>

<script>
	
	import BookListTopbar from '@/components/BookList/BookListTopbar'
	import BookListContent from '@/components/BookList/BookListContent'
	
	import { storeMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookList',
		mixins: [storeMixin],
		data() {
			return {
				bookList: [],
				isSearch: null
			}
		},
		components: {
			BookListTopbar,
			BookListContent
		},
		created() {
			this.isSearch = !!this.$route.query.q
			this.isSearch ? this.genSearchBooks() : this.genCategoryBooks()
		},
		computed: {
			count() {
				let count = 0
				this.bookList.forEach(books => count += books.books.length)
				return count
			}
		},
		methods: {
			genSearchBooks() {
				
				const findBookName = this.$route.query.q
				
				for (let v in this.books) {
					const findedBooks = this.books[v].filter(book => book.title.indexOf(findBookName) !== -1)
					
					if (findedBooks.length) {
						this.bookList.push({
							name: v,
							books: findedBooks
						})
					}
				}
			},
			genCategoryBooks() {
				this.bookList.push({
					name: this.$route.query.cate,
					books: this.books[this.$route.query.cate]
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.book-list
		width 100%
		height 100%
		display flex
		flex-direction column
	
</style>
