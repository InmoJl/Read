<template>
	<div class="ebook-bookmark"
		v-if="bookAvailable">
		<div class="ebook-bookmark-text">
			<div class="ebt-icon-wrap"><i class="iconfont icon-pulldown"></i></div>
			<span>{{ tipText }}</span>
		</div>
		<div class="ebook-bookmark-icon"
			:class="{'fixed-markbook-icon': isBookmark}"
			:style="borderColor"></div>
	</div>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	import {
		getBookmark,
		saveBookmark
	} from '@/utils/localStorage'
	
	export default {
		name: 'EbookBookmark',
		mixins: [ebookMixin],
		data() {
			return {
				tipText: this.$t('book.pulldownAddMark'),
				color: '#ffffff',
				bookmarkHeight: 50,
				threshold: 60,
				isRefreshState: true,
				isAddBookmark: true
			}
		},
		computed: {
			borderColor() {
				return {
					borderColor: `${this.color} ${this.color} transparent ${this.color}`
				}
			}
		},
		watch: {
			offsetY(newValue) {
				if (newValue === 0)
					this.reset()
				else if (newValue < this.bookmarkHeight)
					this.toggleTip()
				else if (newValue < this.threshold)
					this.backState()
				else if (newValue >= this.threshold)
					this.changeState()
			},
			isBookmark(newValue) {
				if (newValue)
					this.color = '#e74c3c'
				else
					this.color = '#ffffff'
			}
		},
		methods: {
			reset() {
				this.$el.style.transition = 'top .2s'
				this.$el.style.top = `-${50}px`
				setTimeout(() => this.$el.style.transition = '', 200)
				
				if (this.isRefreshState === false) {
					this.isRefreshState = true
					
					if (this.isAddBookmark)
						this.addBookmark()
					else
						this.removeBookmark()
				}
			},
			toggleTip() {
				this.tipText = this.isBookmark ?
					this.$t('book.pulldownDeleteMark') : this.$t('book.pulldownAddMark')
			},
			backState() {
				this.$el.style.top = `-${this.offsetY}px`
				
				// 如果为 false 代表从第三阶段回来
				if (!this.isRefreshState) {
					this.isRefreshState = true
					this.isBookmark = !this.isBookmark
					this.color = this.isBookmark ? '#e74c3c' : '#ffffff'
				}
			},
			addBookmark() {
				
				if (!this.bookmarks.length) {
					const localBookmark = getBookmark(this.fileName)
					if (localBookmark) this.setBookmarks(localBookmark)
				}
				
				const currentLocation = this.currentBook.rendition.currentLocation(),
							startCfi	= currentLocation.start.cfi,
							cfiBase 	= startCfi.replace(/!.*/, ''),
							cfiEnd 		= currentLocation.end.cfi.replace(/.*!/, '').replace(/\)$/, ''),
							cfiStart 	= startCfi.replace(/.*!/, '').replace(/\)$/, ''),
							cfiRange	= `${cfiBase}!,${cfiStart},${cfiEnd})`
							
				this.currentBook.getRange(cfiRange).then(range => {
					if (this.bookmarks.every(item => item.cfi !== startCfi)) {
						this.setBookmarksItem({
							cfi: startCfi,
							text: range.toString(),
							name: this.navigation[this.section].label
						})
						saveBookmark(this.fileName, this.bookmarks)
					}
				})
			},
			removeBookmark() {
				const cfi = this.currentBook.rendition.currentLocation().start.cfi
				this.setBookmarks(this.bookmarks.filter(item => item.cfi !== cfi))
				saveBookmark(this.fileName, this.bookmarks)
			},
			changeState() {
				this.$el.style.top = `-${this.offsetY}px`
				
				if (this.isRefreshState) {
					
					this.isRefreshState = false
					
					if (this.isBookmark) {
						this.color = '#ffffff'
						this.tipText = this.$t('book.releaseDeleteMark')
						this.isAddBookmark = false
						this.setIsBookmark(false)
					}
					else {
						this.color = '#e74c3c'
						this.tipText = this.$t('book.releaseAddMark')
						this.isAddBookmark = true
						this.setIsBookmark(true)
					}
				}
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-bookmark
		position absolute
		top -5rem
		left 0
		right 0
		height 5rem
		
		.ebook-bookmark-text
			font-size 1.8rem
			float right
			margin-right 4rem
			display flex
			align-items center
			line-height 5rem
			
			.ebt-icon-wrap
				margin-right .2rem
				.icon-pulldown
					font-size 2rem
		
		.ebook-bookmark-icon
			position absolute
			right 1rem
			top 0
			border-width 3rem 1rem 1rem 1rem
			border-color #fff #fff transparent #fff
			border-style solid
			transition .2s
			
		.fixed-markbook-icon
			position fixed
			top 0
			z-index 999
		
</style>
