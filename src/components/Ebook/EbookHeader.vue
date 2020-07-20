<template>
	<section class="ebook-header" v-if="bookAvailable">{{ title }}</section>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookHeader',
		mixins: [ebookMixin],
		computed: {
			title() {
				return this.navigation[this.section].label
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-header
		position absolute
		padding 0 2rem
		top 1rem
		left 0
		right 0
		z-index 9999
		overflow hidden
		text-overflow ellipsis
		white-space nowrap
		line-height 2rem
		height 2rem
		font-size 1.6rem
		color #777777
	
</style>
