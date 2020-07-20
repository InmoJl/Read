<template>
	<div class="book-list-content">
		<div class="blc-shell"
			v-for="(cate, index) in data"
			:key="index">
			<h4 class="blc-shell-cate">{{ getCategoryText(cate.name) }}</h4>
			<ul class="blc-books">
				<li class="blc-books-item"
					v-for="(book, i) in cate.books"
					@click="gotoDetail(book)"
					:key="i">
					<div class="blc-item-cover-wrap">
						<img class="blc-item-cover" v-lazy="book.cover" alt="">
					</div>
					<div class="blc-item-info">
						<h4 class="blc-info-title">{{ book.title }}</h4>
						<p class="blc-info-author">{{ book.author }}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import { categoryText, categoryList } from '@/utils/book'
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookListContentOfSearch',
		mixins: [bookClickMixin],
		props: {
			data: {
				default() { return [] }
			}
		},
		methods: {
			getCategoryText(cateText) {
				return categoryText(categoryList[cateText], this)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.book-list-content
		flex 1
		padding 0 1rem
		font-size 1.8rem
		overflow hidden auto
		
	.blc-shell
		margin-bottom 2rem
	
		.blc-books-item
			display flex
			margin-top 1rem
			font-size 1.6rem
			
			.blc-item-cover-wrap
				flex 1
				font-size 0
				
				.blc-item-cover
					width 100%
					
			.blc-item-info
				flex 4
				width 0
				margin-left 1rem
				
				.blc-info-title,
				.blc-info-author,
					white-space nowrap
					text-overflow ellipsis
					overflow hidden
					
	.blc-shell:last-child
		margin-bottom 0
	
</style>
