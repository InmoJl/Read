<template>
	<div class="store-category-item">
		<card-header
			:title="getCategoryText()"
			:btnText="$t('home.seeAll')"
			:btnClickFn="gotoList"/>
		<div class="sci-books">
			<div class="sci-book"
				v-for="(book, index) in category.list"
				@click="gotoDetail(book)"
				:key="index">
				<div class="sci-book-cover-wrap">
					<img class="sci-book-cover" v-lazy="book.cover" alt="">
				</div>
				<div class="sci-book-info">
					<h4 class="sci-book-title">{{ book.title }}</h4>
					<p class="sci-book-author">{{ book.author }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	import { categoryText, getCategoryName } from '@/utils/book'
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'StoreCategoryItem',
		mixins: [bookClickMixin],
		props: {
			category: {
				default() {
					return {}
				}
			}
		},
		components: {
			CardHeader
		},
		methods: {
			getCategoryText() {
				return categoryText(this.category.category, this)
			},
			gotoList() {
				this.$router.push({
					path: '/list',
					query: { cate: getCategoryName(this.category.category) }
				})
			}	
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.store-category-item
		margin-top 2rem
	
	.sci-books
		display flex
		justify-content space-between
		
		.sci-book
			width 23%
			
			.sci-book-cover-wrap
				width 100%
				font-size 0
				
				.sci-book-cover
					width 100%
					
			.sci-book-info
				font-size 1.4rem
				
				.sci-book-title,
				.sci-book-author
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
					
				.sci-book-author
					font-size 1.2rem
	
</style>
