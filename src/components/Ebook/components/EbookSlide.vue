<template>
	<transition name="slide-left">
		<div class="ebook-slide" v-show="menuVisible && settingVisible === 1">
			<div class="ebook-slide-container">
				<div class="esc-page-wrap" v-if="bookAvailable">
					<div class="esc-page">
						<keep-alive>
							<component :is="currentIndex === 1 ? content : bookmark"></component>
						</keep-alive>
					</div>
					<div class="esc-tab">
						<div class="esc-tab-item"
							:class="{ 'active': currentIndex === 1 }"
							@click.stop="currentIndex = 1">{{ $t('book.navigation') }}</div>
						<div class="esc-tab-item"
							:class="{ 'active': currentIndex === 2 }"
							@click.stop="currentIndex = 2">{{ $t('book.bookmark') }}</div>
					</div>
				</div>
				<ebook-loading v-else></ebook-loading>
			</div>
			<div class="fade" @click.stop="hideMenu"></div>
		</div>
	</transition>
</template>

<script>
	
	import EbookSlideContent from './EbookSlideContent'
	import EbookSlideBookmark from './EbookSlideBookmark'
	import EbookLoading from './EbookLoading'
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookSlide',
		mixins: [ebookMixin],
		components: {
			EbookLoading
		},
		data() {
			return {
				currentIndex: 1,
				content: EbookSlideContent,
				bookmark: EbookSlideBookmark
			}
		},
		methods: {
			hideMenu() {
				this.setSettingVisible(-1)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.ebook-slide
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		z-index 9999
		
		.ebook-slide-container
			width 69%
			height 100%
			background-color #fff
			position relative
			z-index 10001
			
			.esc-page-wrap
				display flex
				height 100%
				flex-direction column
				
				.esc-page
					height 94%

				.esc-tab
					height 6%
					display flex
					align-items center
					box-sizing border-box
					border-top 1px solid #ccc
					
					.esc-tab-item
						flex 1
						text-align center
						color #ccc
					
					.active
						color #1BA1E2
			
		.fade
			position absolute
			top 0
			bottom 0
			left 0
			right 0
			z-index 10000
			background-color rgba(0, 0, 0, .5)
	
</style>
