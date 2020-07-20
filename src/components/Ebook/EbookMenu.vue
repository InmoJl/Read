<template>
	<div class="ebook-menu">
		<ebook-menu-items />
		<ebook-setting-font-size />
		<ebook-setting-font-popup />
		<ebook-setting-theme />
		<ebook-setting-progress />
		<ebook-slide />
	</div>
</template>

<script>
	
	import EbookMenuItems from './components/EbookMenuItems'
	import EbookSettingFontSize from './components/EbookSettingFontSize'
	import EbookSettingFontPopup from './components/EbookSettingFontPopup'
	import EbookSettingTheme from './components/EbookSettingTheme'
	import EbookSettingProgress from './components/EbookSettingProgress'
	import EbookSlide from './components/EbookSlide'
	
	export default {
		name: 'EbookMenu',
		components: {
			EbookMenuItems,
			EbookSettingFontSize,
			EbookSettingFontPopup,
			EbookSettingTheme,
			EbookSettingProgress,
			EbookSlide
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-menu
		position absolute
		bottom 0
		left 0
		right 0
		z-index 99999
		font-size 1.6rem
	
</style>
