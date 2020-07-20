<template>
	<section class="detail-function">
		<div class="df-item" @click="onClick">{{ $t('detail.read') }}</div>
		<div class="df-item" @click="onListen">{{ $t('detail.listen') }}</div>
		<div class="df-item" @click="onAddBokshelf">{{ addStatus }}</div>
	</section>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	import { getCategoryName } from '@/utils/book'
	
	export default {
		name: 'DetailFunction',
		mixins: [shelfMixin],
		methods: {
			onClick() {
				this.$router.push({
					path: `/ebook/${this.$route.query.category}|${this.$route.query.fileName}`
				})
			},
			onListen() {
				console.log('listen');
			},
			onAddBokshelf() {
				const {shelfIndex, fileName} = this.$route.query
				
				if (this.isAdded) {
					shelfIndex ?
						this.removeBookOfCate({indexOfShelfbook: shelfIndex, bookId: fileName}) : 
						this.removeBook(fileName)
				} else {
					this.pushBook(this.$parent.info)
				}
			},
			isInShelfbook(list) {
				const fileName = this.$route.query.fileName
				return list.some(book => book.cateName ? this.isInShelfbook(book.books) : book.bookId === fileName)
			}
		},
		computed: {
			isAdded() {
				return this.shelfBooks.length ? this.isInShelfbook(this.shelfBooks) : false
			},
			addStatus() {
				return this.isAdded ? this.$t('detail.removeFromBookshelf') : this.$t('detail.addToBookshelf')
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail-function
		width 100%
		height 5rem
		display flex
		box-shadow 0 0 12px rgba(0, 0, 0, .1)
		cursor pointer
		background-color #fff
		
		.df-item
			flex 1
			color #1BA1E2
			font-size 1.8rem
			line-height 5rem
			text-align center
	
</style>
