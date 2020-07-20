<template>
	<section class="flap-card"
		v-show="flapCardVisible"
		:class="{ 'leave': isLeave }">
		<div class="flap-card-wrap" v-if="!book">
			<div class="flap-card-animate">
				<div class="fca-ice">
					<div class="fca-ice-list"
						:class="{ 'ice-animate': animatAvailable }">
						<div class="fca-ice-1"></div>
						<div class="fca-ice-2"></div>
						<div class="fca-ice-3"></div>
						<div class="fca-ice-4"></div>
						<div class="fca-ice-1"></div>
						<div class="fca-ice-2"></div>
						<div class="fca-ice-3"></div>
						<div class="fca-ice-4"></div>
					</div>
				</div>
				<div class="fca-stick"></div>
			</div>
		</div>
		<div class="flap-card-book" v-if="bookVisible">
			<div class="flap-card-book-info">
				<div class="fcb-cover-wrap">
					<img class="fcb-cover" :src="book.cover" alt="">
				</div>
				<h4 class="fcb-title">{{ book.title.trim() }}</h4>
				<p class="fcb-author">{{ book.author }}</p>
			</div>
			<div class="fcb-btn-read" @click.stop="gotoDetail">{{ $t('home.readNow') }}</div>
		</div>
		<div class="flap-card-close" @click.stop="closeFlapCard">
			<i class="iconfont icon-close"></i>
		</div>
	</section>
</template>

<script>
	
	import { storeMixin } from '@/utils/mixin'
	
	export default {
		name: 'FlapCard',
		mixins: [storeMixin],
		data() {
			return {
				isLeave: false,
				animatAvailable: true,
				bookCardVisible: false,
				book: null,
				bookVisible: false
			}
		},
		methods: {
			closeFlapCard() {
				this.isLeave = true
				this.animatAvailable = false
				setTimeout(() => {
					this.book = null
					this.setFlapCardVisible(false)
					this.bookVisible = false
				}, 410)
			},
			gotoDetail() {
				this.$router.push({
					path: '/detail',
					query: {
						fileName: this.book.bookId,
						category: this.book.categoryText
					}
				})
			}
		},
		watch: {
			flapCardVisible(visible) {
				if (visible) {
					this.animatAvailable = true
					this.isLeave = false
				}
			},
			isRandomBook(is) {
				if (is) {
					// 模拟数据、解析时间
					setTimeout(() => {
						this.book = this.recommendBooks[0 | (Math.random() * this.dataLength)]
						this.bookVisible = true
						this.setIsRandomBook(false)
					}, 600)
				}
			}
		},
		computed: {
			dataLength() {
				if (!this.recommendBooks) return -1
				
				return this.recommendBooks.length
			}
		}
	}
	
</script>

<style lang="stylus" scoped>

	@import "~@/assets/styles/animate.styl"
	
	@keyframes close-btn
		0%
			bottom -4rem

	@keyframes flap-wrap
		0%
			top -10rem

	@keyframes flap-bg
		0%
			background-color rgba(0, 0, 0, 0)
			
	@keyframes book-info
		0%
			transform scale(.2)
			opacity 0

	.flap-card
		position fixed
		top 0
		right 0
		left 0
		bottom 0
		z-index 9999
		display flex
		justify-content center
		align-items center
		background-color rgba(0, 0, 0, .6)
		transition background-color .4s ease-out
		animation flap-bg .4s ease-out

	.flap-card-wrap
		width 10rem
		height 10rem
		position absolute
		top 50%
		left 50%
		transform translate(-50%, -50%)
		background-color #fff
		border-radius 2rem
		display flex
		justify-content center
		transition top .4s
		animation flap-wrap .4s ease-out
		
		.flap-card-animate
			margin auto
		
			.fca-ice
				width 3rem
				height 6rem
				position relative
				z-index 1
				overflow hidden
				border-radius 2rem 2rem 1rem 1rem
				box-shadow 8px 4px 6px rgba(0, 0, 0, .6)
				
				.fca-ice-list
					width 11.2rem
					height 8rem
					transform rotate(-30deg) translate3d(0, -25%, 0)
					
				.ice-animate
					animation ice 2s linear infinite
				
					& > div
						width 1.4rem
						height 100%
						float left
					
					.fca-ice-1
						background-color #1BA1E2
						
					.fca-ice-2
						background-color #e74c3c
						
					.fca-ice-3
						background-color #e67e22
						
					.fca-ice-4
						background-color #1abc9c

			.fca-stick
				width .8rem
				height 2rem
				transform translateY(-10%)
				position relative
				z-index 0
				margin 0 auto
				background-color #5e3f2a
				border-radius .6rem
				box-shadow 8px 4px 6px rgba(0, 0, 0, .6)
		
	
	.flap-card-book
		width 30rem
		height 34rem
		display flex
		flex-direction column
		background-color #fff
		border-radius 2rem
		text-align center
		opacity 1
		animation book-info .4s
		transition all .4s ease-out
		
		.flap-card-book-info
			flex 1
			padding 1rem
			display flex
			flex-direction column
			
			.fcb-cover-wrap
				height 20.6rem
				
				.fcb-cover
					height 100%
				
			.fcb-title
				display -webkit-box
				width 100%
				height 2.4rem
				margin-top 1rem
				overflow hidden
				text-overflow ellipsis
				font-size 2rem
				line-height 2.4rem
			
			.fcb-author
				font-size 1.6rem
				line-height 2.1rem
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
				color #777777
		
		.fcb-btn-read
			width 100%
			height 4.6rem
			line-height 4.6rem
			text-align center
			background-color #3498DB
			color #fff
			border-radius 0 0 2rem 2rem
			font-size 2rem
			
	.flap-card-close
		position absolute
		bottom 16%
		left 50%
		transform translateX(-50%)
		text-align center
		line-height 4rem
		border 2px solid #B4B5B7
		width 4rem
		height 4rem
		border-radius 50%
		transition bottom .4s
		animation close-btn .4s ease-out
	
		.icon-close
			color #B4B5B7
			font-size 3rem
			
	.leave
		background-color rgba(0, 0, 0, 0)
		
		.flap-card-wrap
			top -10rem
		
		.flap-card-close
			bottom -4rem
			
		.flap-card-book
			transform scale(.2)
			opacity 0
	
</style>
