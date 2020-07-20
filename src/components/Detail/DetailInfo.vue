<template>
	<section class="detail-info">
		<div class="di-cover-wrap">
			<img class="di-cover" v-lazy="data.cover" alt="">
		</div>
		<div class="di-content">
			<h4 class="di-content-title">{{ data.title }}</h4>
			<div class="di-content-author">{{ data.author }}</div>
		</div>
	</section>
</template>

<script>
	
	export default {
		name: 'DetailInfo',
		props: {
			data: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail-info
		display flex
		min-height 14rem
		align-items center
		padding 0 1rem
		
		.di-cover-wrap
			flex 1
			margin-right 1rem
			font-size 0
			
			.di-cover
				width 100%
			
		.di-content
			flex 3
			
			.di-content-title,
			.di-content-author
				display -webkit-box
				-webkit-box-orient vertical
				overflow hidden
				text-overflow ellipsis
				-webkit-line-clamp 2
				line-clamp 2
			
			.di-content-title
				font-size 2rem
				margin-bottom 1rem
				
			.di-content-author
				font-size 1.6rem
				color #3498DB
	
</style>
