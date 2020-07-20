<template>
	<div class="ebook">
		<ebook-header />
		<ebook-title />
		<ebook-reader />
		<ebook-menu />
		<ebook-bookmark />
		<ebook-footer />
	</div>
</template>

<script>
	
	import EbookReader 	from '@/components/Ebook'
	import EbookTitle		from '@/components/Ebook/EbookTitle'
	import EbookMenu		from '@/components/Ebook/EbookMenu'
	import EbookBookmark from '@/components/Ebook/EbookBookmark'
	import EbookHeader from '@/components/Ebook/EbookHeader'
	import EbookFooter from '@/components/Ebook/EbookFooter'
	
	import { ebookMixin } from '@/utils/mixin'
	import { getBookmark } from '@/utils/localStorage'
	
	export default {
		name: 'Ebook',
		mixins: [ebookMixin],
		data() {
			return {
				second: 0,
				timer: null
			}
		},
		components: {
			EbookHeader,
			EbookTitle,
			EbookReader,
			EbookMenu,
			EbookBookmark,
			EbookFooter
		},
		created() {
			this.setBookmarks(getBookmark(this.fileName) || [])
		},
		mounted() {
			this.startLoopReadTime()
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		watch: {
			offsetY(newValue) {
				
				if (newValue < 0)
					return
				else if (newValue === 0)
					this.restore()
				
				this.$el.style.top = newValue + 'px'
			}
		},
		methods: {
			restore() {
				this.$el.style.top = 0
				this.$el.style.transition = 'top .2s'
				setTimeout(() => this.$el.style.transition = '', 200)
			},
			startLoopReadTime() {
				this.timer = setInterval(() => {
					this.second += 10
					
					if (this.second % 60 === 0)
					{
						this.setReaderMinute(this.readerMinute + 1)
						this.second = 0
						
						if (this.readerMinute % 60 === 0)
						{
							this.setReaderHours(this.readerHours + 1)
							this.setReaderMinute(0)
						}
					}
				}, 10000)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook
		width 100%
		height 100%
		position relative
	
</style>
