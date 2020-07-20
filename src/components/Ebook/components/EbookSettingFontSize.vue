<template>
	<transition name="slide-up">
		<div class="ebook-setting-font" v-show="menuVisible && settingVisible === 4">
			<div class="esf-size" >
				<span class="esf-dec">A</span>
				<ul class="esf-list">
					<li class="esf-item"
						v-for="({fontSize}, index) in fontSizeList"
						@click="setFont(fontSize)"
						:class="{ 'default-font-size': fontSize == bookFontSize}"
						:key="index"></li>
				</ul>
				<span class="esf-inc">A</span>
			</div>
			<div class="esf-family" @click.stop="setFontPopupVisible(true)">
				<span>{{ bookFontFamily }}</span><i class="iconfont icon-forward"></i>
			</div>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	import { FONT_SIZE_LIST } from '@/utils/book'
	import {
		setFontSize
	} from '@/utils/localStorage'
	
	export default {
		name: 'EbookSettingFont',
		mixins: [ebookMixin],
		data() {
			return {
				fontSizeList: FONT_SIZE_LIST
			}
		},
		methods: {
			setFont(fontSize) {
				this.setBookFontSize(fontSize)
				this.currentBook.rendition.themes.fontSize(fontSize)
				
				setFontSize(fontSize)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>

	@import '~@/assets/styles/animate.styl'

	.ebook-setting-font
		position absolute
		left 0
		right 0
		bottom 5rem
		box-shadow 0 -1rem 1.2rem rgba(0, 0, 0, .2)

	.esf-size
		background-color #fff
		z-index 888
		display flex
		align-items center
		
		.esf-dec
			font-size 1.6rem
		
		.esf-inc
			font-size 2.4rem
			
		.esf-dec,
		.esf-inc
			width 4rem
			line-height 5rem
			text-align center
			
		.esf-list
			list-style none
			flex 1
			height 3rem
			background-color #eee
			border-radius 1.5rem
			display flex
			justify-content space-around
			align-items center
			
			.esf-item
				flex 1
				height 100%
				position relative
				
				&::after
					content ""
					width 1.2rem
					height 1.2rem
					background-color #ccc
					border-radius 50%
					position absolute
					top 50%
					left 50%
					transform translate(-50%, -50%)
					transition .2s
				
			.default-font-size::after
				border .6rem solid #3498db
				background-color #fff
	
	.esf-family
		width 100%
		height 3rem
		background-color #fff
		display flex
		justify-content center
		align-items center

</style>
