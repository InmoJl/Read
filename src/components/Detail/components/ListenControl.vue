<template>
	<div class="listen-control">
		<div class="lc-item">
			<span class="lc-icon-wrap">
				<i class="iconfont icon-timer"></i><p class="lc-desc">定时关闭</p>
			</span>
		</div>
		<div class="lc-item">
			<span class="lc-icon-wrap">
				<i class="iconfont icon-stepbackward"></i>
			</span>
		</div>
		<div class="lc-item">
			<span class="lc-icon-wrap lc-status">
				<i class="iconfont icon-play"></i>
			</span>
		</div>
		<div class="lc-item">
			<span class="lc-icon-wrap">
				<i class="iconfont icon-stepforward"></i>
			</span>
		</div>
		<div class="lc-item">
			<span class="lc-icon-wrap">
				<i class="iconfont icon-menu"></i><p class="lc-desc">共1024章</p>
			</span>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'ListenControl'
	}
	
</script>

<style lang="stylus" scoped>
	
	.listen-control
		height 8rem
		display flex
		align-items center
		
		.lc-desc
			font-size 1rem
			font-weight bold
		
		.lc-item
			flex 1
			text-align center
			
			.icon-timer,
			.icon-menu
				font-size 2.4rem
				
			.icon-play
				font-size 3rem
				
			.icon-stepbackward,
			.icon-stepforward
				font-size 3rem
				
			.lc-status
				width 6rem
				height 6rem
				line-height 6rem
				border-radius 50%
				background-image: linear-gradient(to top, #04befe 0%, #4481eb 100%);
				color #fff
				
				.iconfont
					color #fff
				
			.lc-icon-wrap
				display inline-block
	
</style>
