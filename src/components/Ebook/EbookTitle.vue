<template>
	<transition name="slide-down">
		<div class="ebook-title" v-show="menuVisible">
			<div class="ebook-title-left" @click.stop="onBack">
				<span class="ebook-title-item">
					<i class="iconfont icon-back"></i>
				</span>
			</div>
			<div class="ebook-title-right">
				<span class="ebook-title-item"><i class="iconfont icon-shelf"></i></span>
				<span class="ebook-title-item"><i class="iconfont icon-shopping"></i></span>
				<span class="ebook-title-item"><i class="iconfont icon-more"></i></span>
			</div>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookTitle',
		mixins: [ebookMixin],
		methods: {
			onBack() {
				this.setMenuVisible(false)
				this.$router.go(-1)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '//at.alicdn.com/t/font_1808340_83j8jpza3e.css'
	@import '~@/assets/styles/animate.styl'
	
	.ebook-title
		position absolute
		top 0
		right 0
		left 0
		padding 1rem
		box-shadow 0 0 12px rgba(0, 0, 0, .2)
		background-color #fff
		display flex
		justify-content space-between
		z-index 9999
		
		.ebook-title-right
			display flex
			
		.ebook-title-item
			display block
			width 4rem
			height 3rem
			line-height 3rem
		
			.iconfont
				font-size 2.8rem
	
</style>
