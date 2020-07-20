<template>
	<div class="ebook-loading">
		<div class="ebook-loading-border">
			<div class="ebook-loading-item">
				<span class="ebook-loading-cell"></span>
				<span class="ebook-loading-cell"></span>
				<span class="ebook-loading-cell"></span>
			</div>
			<div class="ebook-loading-item">
				<span class="ebook-loading-cell"></span>
				<span class="ebook-loading-cell"></span>
				<span class="ebook-loading-cell"></span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	
	@keyframes chang
		33%
			width 100%
		66%
			width 0%
	
	.ebook-loading
		width 100%
		height 100%
		display flex
		align-items center
		justify-content center
		
		.ebook-loading-border
			width 8rem
			height 4rem
			display flex
			
			.ebook-loading-item
				flex 1
				width 50%
				height 100%
				padding .4rem
				border 2px solid #333
				border-radius .4rem
				display flex
				flex-direction column
				justify-content space-evenly
				
				.ebook-loading-cell
					display block
					width 0%
					height 2px
					background-color #333

			.ebook-loading-item:first-child
				border-right-width 1px
				
				.ebook-loading-cell:nth-child(1)
					animation 2.4s linear chang infinite
				
				.ebook-loading-cell:nth-child(2)
					animation 2.4s linear .4s chang infinite
				
				.ebook-loading-cell:nth-child(3)
					animation 2.4s linear .8s chang infinite
					
			.ebook-loading-item:last-child
				border-left-width 1px
				
				.ebook-loading-cell:nth-child(1)
					animation 2.4s linear .4s chang infinite
				
				.ebook-loading-cell:nth-child(2)
					animation 2.4s linear .8s chang infinite
				
				.ebook-loading-cell:nth-child(3)
					animation 2.4s linear 1.2s chang infinite
	
</style>
