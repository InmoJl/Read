<template>
	<section class="store-featured">
		<card-header 
			:title="$t('home.featured')" />
		<div class="store-featured-list">
			<div class="store-featured-item"
				v-for="(book, index) in featured"
				@click="gotoDetail(book)"
				:key="index">
				<div class="sfi-cover-wrap">
					<img class="sfi-cover" v-lazy="book.cover" alt="">
				</div>
				<div class="sfi-info">
					<h4 class="sfi-info-title">{{ book.title }}</h4>
					<p class="sfi-info-author">{{ book.author }}</p>
					<p class="sfi-info-categories">{{ getCategory(book.category) }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	import { categoryText } from '@/utils/book'
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'StoreFeatured',
		mixins: [bookClickMixin],
		props: {
			featured: {
				default() {
					return []
				}
			}
		},
		components: {
			CardHeader
		},
		methods: {
			getCategory(cateText) {
				return categoryText(cateText, this)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.store-featured
		margin-top 2rem
	
	.store-featured-list
		display flex
		justify-content space-between
		flex-wrap wrap
		
		.store-featured-item
			width 49%
			display flex
			font-size 1.4rem
			margin-top 1rem
			
			.sfi-cover-wrap
				flex 1
				font-size 0
				margin-right .4rem
				
				.sfi-cover
					width 100%
				
			.sfi-info
				flex 2
				width 0
				
				.sfi-info-title,
				.sfi-info-author,
				.sfi-info-categories
					width 100%
					overflow hidden
					text-overflow ellipsis
					white-space nowrap
				
	
</style>
