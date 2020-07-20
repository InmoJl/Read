<template>
	<div class="item-of-category">
		<div class="ioc-content"
			:style="{ height: itemHeight }"
			:class="{ grap: isEditStatus }"
			@click.stop="gotoCategory">
			<div class="ioc-wrap">
				<div class="ioc-image-wrap"
					v-for="(book, index) in book.books"
					:key="book.id">
					<img class="ioc-image" :src="book.cover" alt="">
				</div>
			</div>
		</div>
		<p class="ioc-title">{{ book.cateName }}</p>
	</div>
</template>

<script>
	
	import ItemOfAdd from './ItemOfAdd'
	import BookshelfItem from '../BookshelfItem.vue'
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'ItemOfCategory',
		mixins: [shelfMixin],
		props: {
			book: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				required: true
			}
		},
		components: {
			BookshelfItem,
			ItemOfAdd
		},
		computed: {
			itemHeight() {
				const itemWidth = Math.floor((window.innerWidth - 80) / 3 * 10) / 10
				return ((itemWidth / 0.714) | 0)+ 'px'
			}
		},
		methods: {
			gotoCategory() {
				if (this.isEditStatus) return
				
				this.$router.push({
					path: '/bookshelf/category',
					query: { shelfIndex: this.index }
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.item-of-category
		width 100%
		background-color #fff
		
	.grap
		transition none
		filter grayscale(100%)
		
	.ioc-content
		width 100%
		box-shadow 0 0 4px rgba(0, 0, 0, .2)
		transition all .4s
		
		.ioc-wrap
			width 100%
			box-sizing border-box
			padding .2rem
			display flex
			flex-wrap wrap
			overflow hidden
			
			.ioc-image-wrap
				width 33.33%
				box-sizing border-box
				padding .2rem
				font-size 0
				
				.ioc-image
					width 100%
					
	.ioc-title
		margin-top 1rem
		font-size 1.4rem
		overflow hidden
		display -webkit-box
		-webkit-line-clamp 2
		line-clamp 2
		-webkit-box-orient vertical
	
</style>
