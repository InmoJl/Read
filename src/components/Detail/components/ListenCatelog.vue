<template>
	<div class="listen-catelog" v-show="catelogVisible">
		<div class="lc-mask"></div>
		<div class="lc-content">
			<div class="lc-content-wrap">
				<div class="lc-content-header">
					<div class="lc-header-top">
						<div class="lc-header-left">
							<span><i class="iconfont icon-listen"></i></span>
							<span class="lc-title-desc">AI语音朗读</span>
						</div>
						<div class="lc-header-right">
							<span class="lc-header-cell"><i class="iconfont icon-clouddownload"></i>下载到本地</span>
							<span class="lc-header-cell"><i class="iconfont icon-bottom"></i>去底部</span>
						</div>
					</div>
					<p class="lc-header-count">共 1055 章</p>
				</div>
				<div class="lc-content-scroll">
					<ol class="lc-list-container">
						<li class="lc-list-item" v-for="item in 50">第{{ item }}章</li>
					</ol>
				</div>
			</div>
			<div class="lc-close-btn" @click="onClose">关闭</div>
		</div>
	</div>
</template>

<script>
	
	import { detailMixin } from '@/utils/mixin'
	
	export default {
		name: 'ListenCatelog',
		mixins: [detailMixin],
		methods: {
			onClose() {
				this.setCatelogVisible(false)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.listen-catelog
		position absolute
		top 0
		right 0
		bottom 0
		left 0
		z-index 9999
		display flex
		flex-direction column-reverse
		
		.lc-mask
			position absolute
			top 0
			right 0
			bottom 0
			left 0
			z-index -1
			background-color rgba(0, 0, 0, .6)
		
		.lc-content
			width 100%
			height 90%
			background-color #fff
			display flex
			flex-direction column
			border-radius 2rem 2rem 0 0
			overflow hidden
			
			.lc-close-btn
				font-size 1.6rem
				text-align center
				line-height 4.6rem
				color #333
				font-weight bold
				border-top 1px solid #eee
			
			.lc-content-wrap
				flex 1
				overflow hidden
				display flex
				flex-direction column
				
				.lc-content-header
					border-bottom 1px solid #eee
					padding 2rem
					
					.lc-header-top
						display flex
						justify-content space-between
						align-items center
						margin-bottom 0.8rem
						
						.lc-header-left
							display flex
							align-items center
						
							.lc-title-desc
								font-size 1.6rem
								font-weight bold
								color #333
								margin-left 1rem
								
							.icon-listen
								font-size 3rem
								line-height 3rem
								color #008DFA
							
						.lc-header-right
							.lc-header-cell
								color #008DFA
								font-size 1.2rem
								font-weight bold
								margin-left 1rem
								
							.icon-clouddownload,
							.icon-bottom
								color #008DFA
							
					.lc-header-count
						font-size 1.2rem
						line-height 1.2rem
					
				.lc-content-scroll
					flex 1
					padding 0 2rem
					overflow hidden auto
				
					.lc-list-container
						list-style none
						font-size 1.6rem
						
						.lc-list-item
							height 5.4rem
							line-height 5.4rem
							border-bottom 1px solid #eee
							color #212832
							
						.lc-list-item:last-child
							border-bottom none
		
	
</style>
