<template>
	<section v-if="bookAvailable" class="ebook-footer">{{ progress + '%' }}</section>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookFooter',
		mixins: [ebookMixin]
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-footer
		position absolute
		padding 0 2rem
		bottom 1rem
		left 0
		right 0
		line-height 2rem
		height 2rem
		font-size 1.6rem
		color #777777
		z-index 9999
		text-align right
	
</style>
