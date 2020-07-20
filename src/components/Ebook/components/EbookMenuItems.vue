<template>
	<transition name="slide-up">
		<div class="ebook-menu-items"
			:class="{'hide-shadow': settingVisible > 0}"
			v-show="menuVisible">
			<span class="ebook-menu-item" @click.stop="showSetting(1)">
				<i class="iconfont icon-table-of-contents"></i>
			</span>
			<span class="ebook-menu-item" @click.stop="showSetting(2)">
				<i class="iconfont icon-progress"></i>
			</span>
			<span class="ebook-menu-item" @click.stop="showSetting(3)">
				<i class="iconfont icon-theme"></i>
			</span>
			<span class="ebook-menu-item" @click.stop="showSetting(4)">
				<i class="iconfont icon-font"></i>
			</span>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookMenuItems',
		mixins: [ebookMixin],
		methods: {
			showSetting(key) {
		
				if (key === this.settingVisible) {
					this.setSettingVisible(-1)
					return
				}
				
				this.setSettingVisible(key)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.ebook-menu-items
		display flex
		width 100%
		background-color #fff
		box-shadow 0 0 12px rgba(0, 0, 0, .2)
		position relative
		z-index 9999
		
		.ebook-menu-item
			flex 1
			height 5rem
			text-align center
			line-height 5rem
			
			.iconfont
				font-size 3rem
				
	.hide-shadow
		box-shadow 0 0 0 rgba(0, 0, 0, .2)
	
</style>
