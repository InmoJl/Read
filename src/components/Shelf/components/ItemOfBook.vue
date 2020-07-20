<template>
	<div class="item-of-book">
		<div class="iob-image-wrap"
			@click.stop="onClick"
			:style="{height: itemHeight}">
			<img class="iob-image" :src="book.cover" alt="">
			<span class="iob-check" :class="{ 'check': isCheck }" v-show="isEditStatus">
				<i class="iconfont" :class="{ 'icon-check': isCheck }"></i>
			</span>
		</div>
		<p class="iob-title">{{ book.title }}</p>
	</div>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'ItemOfBook',
		mixins: [shelfMixin],
		props: {
			book: {
				type: Object,
				default() { return {} }
			},
			wrapWidth: {
				type: Number,
				default: window.innerWidth
			},
			index: {
				type: Number,
				required: true
			}
		},
		data() {
			return {
				isCheck: false
			}
		},
		methods: {
			toggleStatus() {
				this.isCheck = !this.isCheck
			},
			onClick() {
				if (this.isEditStatus) {
					this.isCheck ? this.removeSelectBook(this.index) : this.pushSelectBooks(this.index)
					this.toggleStatus()
				}
				else {
					this.$emit('gotoDetail')
				}
			}
		},
		computed: {
			itemHeight() {
				const itemWidth = Math.floor((this.wrapWidth - 80) / 3 * 10) / 10
				return ((itemWidth / 0.714) | 0)+ 'px'
			}
		},
		watch: {
			isEditStatus(newValue) {
				if (!newValue && this.isCheck) {
					this.isCheck = false
					this.removeSelectBook(this.index)
				}
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.item-of-book
		width 100%
	
	.iob-image-wrap
		width 100%
		position relative
		font-size 0
		
		.iob-image
			width 100%
		
		.iob-check
			position absolute
			z-index 99
			right .4rem
			bottom .4rem
			width 2rem
			height 2rem
			border-radius 50%
			background-color rgba(0, 0, 0, .6)
			text-align center
			line-height 2rem
			
		.check
			background-color #008DFA
			
			.icon-check
				color #fff
			
	.iob-title
		margin-top 1rem
		overflow hidden
		text-overflow ellipsis
		display -webkit-box
		-webkit-box-orient vertical
		-webkit-line-clamp 2
		line-clamp 2
		font-size 1.4rem
		color #212832
	
</style>
