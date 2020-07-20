<template>
	<div class="ebook-slide-bookmark">
		<div class="esb-top">书签 · {{ bookmarks.length }}</div>
		<ol class="esb-content">
			<li class="esb-content-item"
				v-for="(bookmark, index) in bookmarks"
				@click="display(bookmark.cfi)"
				:key="index">
				<h4 class="esb-name">{{ bookmark.name }}</h4>
				<p class="esb-item-text">{{ bookmark.text }}</p>
			</li>
		</ol>
	</div>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookSlideBookmark',
		mixins: [ebookMixin]
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-slide-bookmark
		display flex
		flex-direction column
		width 100%
		height 100%
		overflow hidden
	
	.esb-top
		height 3rem
		font-size 1.8rem
		width 100%
		line-height 3rem
		text-indent 2rem
		padding 1rem 0
		border-bottom 1px solid #ccc
	
	.esb-content
		flex 1
		padding 1rem
		list-style none
		overflow auto
		
		.esb-content-item
			width 100%
			padding-bottom 1rem
			border-bottom 1px solid #ccc
			
			.esb-name
				font-size 1.8rem
		
			.esb-item-text
				display -webkit-box
				text-overflow ellipsis
				overflow hidden
				text-overflow ellipsis
				-webkit-line-clamp 2
				line-clamp 2
				-webkit-box-orient vertical
				height 4rem
				line-height 2rem
		
		.esb-content-item:not(:first-child)
			padding-top 1rem
			
		.esb-content-item:last-child
			border none
	
</style>
