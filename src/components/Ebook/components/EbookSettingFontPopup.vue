<template>
	<transition name="slide-up">
		<div class="ebook-setting-font-popup" v-show="fontPopupVisible">
			<h4 class="esfp-title">
				<i class="iconfont icon-down"
					@click.stop="setFontPopupVisible(false)"></i>
				{{ $t('book.selectFont') }}
			</h4>
			<ul class="esfp-list">
				<li class="esfp-item"
					v-for="({font}, index) in fontFamilyList"
					@click.stop="setFontFamily(font)"
					:class="{'esfp-checked': bookFontFamily === font}"
					:key="index">{{ font }}
					<i class="iconfont icon-check"></i>
				</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } 			from '@/utils/mixin'
	import { FONT_FAMILY_LIST } from '@/utils/book'
	import {
		setFontFamily
	} from '@/utils/localStorage'
	
	export default {
		name: 'EbookSettingFontPopup',
		mixins: [ebookMixin],
		data() {
			return {
				fontFamilyList: FONT_FAMILY_LIST
			}
		},
		methods: {
			setFontFamily(font) {
				this.setBookFontFamily(font)
				
				setFontFamily(font)
				
				if (font === 'Default')
					this.currentBook.rendition.themes.font('Times New Roman')
				else
					this.currentBook.rendition.themes.font(font)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.ebook-setting-font-popup
		overflow hidden
		position absolute
		bottom 5rem
		left 0
		right 0
		background-color #fff
		padding 2rem
		box-shadow 0 -0.6rem 12px rgba(0, 0, 0, .1)
		
		.esfp-title
			text-align center
			line-height 2rem
			margin-bottom 1rem
		
		.esfp-list
			list-style none
			line-height 3rem
			
			.esfp-checked
				color #3498DB
				.icon-check
					display block
			
			.icon-check
				color #3498DB
				float right
				display none
			
		.icon-down
			float left
	
</style>
