<template>
	<section class="ebook-listen" v-show="listenVisible">
		<div class="el-header">
			<span class="el-header-wrap"><i class="iconfont icon-down"></i></span>
			<span class="el-header-wrap"><i class="iconfont icon-more"></i></span>
		</div>
		<div class="el-info">
			<div class="el-cover-wrap">
				<img class="el-cover" :src="data.cover" alt="">
			</div>
			<h4 class="el-info-name">{{ data.title }}</h4>
			<h3 class="el-info-current">This listen article is test</h3>
		</div>
		<div class="el-listen">
			<span class="el-listen-backward">-15s</span>
			<div class="el-listen-progress">
				<div class="el-progress-bar">
					<div class="el-progress-play"></div>
				</div>
				<div class="el-progress-time">
					<span class="el-time-current">00:00</span>
					<span class="el-time-all"> / 09:57</span>
				</div>
			</div>
			<span class="el-listen-forward">+15s</span>
		</div>
		<div class="el-control">
			<div class="el-control-item">
				<span class="el-control-icon-wrap">
					<i class="iconfont icon-timer"></i><p>定时关闭</p>
				</span>
			</div>
			<div class="el-control-item">
				<span class="el-control-icon-wrap">
					<i class="iconfont icon-stepbackward"></i>
				</span>
			</div>
			<div class="el-control-item">
				<span class="el-control-icon-wrap el-control-status">
					<i class="iconfont icon-play"></i>
				</span>
			</div>
			<div class="el-control-item">
				<span class="el-control-icon-wrap">
					<i class="iconfont icon-stepforward"></i>
				</span>
			</div>
			<div class="el-control-item">
				<span class="el-control-icon-wrap">
					<i class="iconfont icon-menu"></i><p>共1024章</p>
				</span>
			</div>
		</div>
	</section>
</template>

<script>
	
	import { detailMixin } from '@/utils/mixin'
	
	export default {
		name: 'DetailListen',
		mixins: [detailMixin],
		props: {
			data: {
				type: [Object, Array]
			}
		},
		mounted() {
			console.log(this.data);
		},
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-listen
		position absolute
		top 0
		left 0
		bottom 0
		right 0
		z-index 9999
		background-color #fff
		padding 0 1rem
		
	.el-header
		display flex
		justify-content space-between
		
		.el-header-wrap .iconfont
			font-size 2.4rem
	
	.el-info
		width 100%
		text-align center
		
		.el-cover-wrap
			width 40%
			font-size 0
			margin 0 auto
			
			.el-cover
				width 100%
				
		.el-info-name
			font-size 1.6rem
			color #B0B0B0
			line-height 3rem
		
		.el-info-current
			font-size 2rem
			line-height 3rem
			
	.el-listen
		display flex
		align-items center
		margin-top 4rem
		
		.el-listen-progress
			flex 1
			height 1.4rem
			position relative
			margin 0 1rem
			
			.el-listen-forward,
			.el-listen-backward
				font-size 1.4rem
				line-height 1.4rem
		
			.el-progress-bar
				width 100%
				height 2px
				background-color #ccc
				position absolute
				top 50%
				left 0
				transform translateY(-50%)
				
				.el-progress-play
					width 24%
					height 100%
					background-color #008DFA

			.el-progress-time
				position absolute
				top 50%
				left 24%
				transform translateY(-50%)
				background-color #fff
				box-shadow 0 0 6px rgba(0, 0, 0, .4)
				line-height 2rem
				font-size 1rem
				border-radius 1.2rem
				padding 0 .6rem
				
	.el-control
		height 6rem
		display flex
		align-items center
		
		.el-control-item
			flex 1
			text-align center
			
			.icon-timer,
			.icon-menu
				font-size 2.4rem
				
			.icon-play
				font-size 4rem
				
			.icon-stepbackward,
			.icon-stepforward
				font-size 3rem
				
			.el-control-status
				width calc(100% / 5)
				height calc(100% / 5)
				background-color #008DFA
				border-radius 50%
				color #fff
				
				.iconfont
					color #fff
				
			.el-control-icon-wrap
				display inline-block

	
</style>
 