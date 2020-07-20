<template>
	<div class="bookshelf-item">
		<component
			v-bind="$attrs"
			@gotoDetail="gotoDetail(book)"
			:is="item"
			:book="book"></component>
	</div>
</template>

<script>
	
	import ItemOfBook from './components/ItemOfBook'
	import ItemOfCategory from './components/ItemOfCategory'
	
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookshelfItem',
		mixins: [bookClickMixin],
		props: {
			book: {
				type: [Object, Array]
			}
		},
		methods: {
			getType(value) {
				return Object.prototype.toString.call(value).match(/\s(\S*)]/)[1]
			},
		},
		computed: {
			item() {
				return this.book.cateName ? ItemOfCategory : ItemOfBook
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.bookshelf-item
		width 33.33%
		box-sizing border-box
		padding 1rem
	
</style>
