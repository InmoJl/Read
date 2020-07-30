<template>
	<div class="listen-progress">
		<span class="lp-backward">－15s</span>
		<div class="lp-container">
			<div class="lp-bar">
				<div class="lp-play"></div>
			</div>
			<div class="lp-time">
				<span class="el-time-current">00:00</span>
				<span class="el-time-all"> / 09:57</span>
			</div>
		</div>
		<span class="lp-forward">＋15s</span>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	
	.listen-progress
		display flex
		height 2rem
		align-items center
		margin-top 4rem
		
		.lp-forward,
		.lp-backward
			font-size 1.4rem

		.lp-container
			flex 1
			height 2px
			position relative
			margin 0 1rem
		
			.lp-bar
				width 100%
				height 2px
				background-color #ccc
				position absolute
				top 50%
				left 0
				transform translateY(-50%)
				
				.lp-play
					width 24%
					height 100%
					background-color #008DFA
	
			.lp-time
				position absolute
				top 50%
				left 24%
				transform translateY(-50%)
				background-color #fff
				box-shadow 0 0 6px rgba(0, 0, 0, .4)
				font-size 1rem
				border-radius 1.2rem
				padding 0 .6rem
				
				.el-time-current,
				.el-time-all
					line-height 2rem
					font-size 1rem
	
</style>
