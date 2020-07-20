<template>
	<div class="bookshelf-list">
		<transition-group name="list" tag="div" class="bl-list">
			<bookshelf-item
				v-for="(book, index) in shelfBooks"
				:book="book"
				:index="index"
				:key="book.id" />
			<item-of-add :key="Math.random()"/>
		</transition-group>
	</div>
</template>

<script>
	
	import BookshelfItem from './BookshelfItem'
	import ItemOfBook from './components/ItemOfBook'
	import ItemOfAdd from './components/ItemOfAdd'
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookshelfList',
		mixins: [shelfMixin],
		props: {
			books: {
				type: Array,
				default() { return [] }
			}
		},
		data() {
			return {
				position: {},
				oldPosition: {},
				isShowCategory: false,
				isShowMask: false
			}
		},
		components: {
			BookshelfItem,
			ItemOfBook,
			ItemOfAdd
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.bookshelf-list
		width 100%
		height 100%
		overflow hidden auto
		position relative
		
		.bl-list
			width 100%
			box-sizing border-box
			display flex
			flex-wrap wrap
			padding 1rem 1rem 8rem 1rem
			
	.category-mask
		position fixed
		z-index 999
		top 0
		right 0
		bottom 0
		left 0
		transition all .4s
		background-color rgba(0, 0, 0, 0)
		backdrop-filter blur(0)
	
		.category-box
			position absolute
			background-color #fff
			transition .4s
			display flex
			flex-wrap wrap
			box-sizing border-box
			padding .2rem
			
			.cb-item
				width 33.33%
				box-sizing border-box
				transition padding .4s
				padding .2rem
				font-size 0
				
				.cb-image
					width 100%
	
	.category-mask-animate
		background-color rgba(0, 0, 0, .6)
		backdrop-filter blur(8px)
		
		.category-box
			padding .6rem
			
			.cb-item
				padding .6rem
	
</style>
