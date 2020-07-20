<template>
	<transition name="slide-up">
		<div class="ebook-setting-theme"
			v-show="menuVisible && settingVisible === 3">
			<ul class="est-list">
				<li class="est-item"
					v-for="(theme, index) in themeList"
					@click.stop="setTheme(index)"
					:style="{
						'background-color': theme.style.body.background,
						'color': theme.style.body.color
					}"
					:class="{'checked-theme': bookTheme === theme.name }"
					:key="index">{{ theme.alias }}</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	import { themeList } from '@/utils/book'
	
	export default {
		name: 'EbookSettingTheme',
		mixins: [ebookMixin],
		methods: {
			setTheme(index) {
				const theme = this.themeList[index]
				
				this.setBookTheme(theme.name).then(() => {
					this.currentBook.rendition.themes.select(this.bookTheme)
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.ebook-setting-theme
		position absolute
		left 0
		right 0
		bottom 5rem
		z-index 888
		background-color #fff
		padding 1rem
		box-shadow 0 -0.6rem 1.2rem rgba(0, 0, 0, .2)
		
		.est-list
			list-style none
			display flex
			width auto
			
			.est-item
				flex 1
				height 4rem
				text-align center
				line-height 4rem
				margin-right .4rem
				transition .2s
				
				&:last-child
					margin-right 0
					
			.checked-theme
				transform scale(.9)
				border-radius .5rem
			
	
	
</style>
