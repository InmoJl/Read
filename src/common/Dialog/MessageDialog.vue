<template>
	<transition name="fade">
		<section class="message-dialog" v-show="visible">
			<div class="md-mask" @click="visible = false"></div>
			<div class="md-content">
				<div class="md-header">
					<h4 class="md-title">私密阅读</h4>
					<div class="md-message">开启后，所选书籍的阅读记录将不会对外公开</div>
				</div>
				<div class="md-content-buttons">
					<div class="md-buttons-cancel" @click="hide">取消</div>
					<div class="md-buttons-open">开启</div>
				</div>
			</div>
		</section>
	</transition>
</template>

<script>
	
	export default {
		name: 'MessageDialog',
		data() {
			return {
				visible: false
			}
		},
		methods: {
			show() {
				this.visible = true
			},
			hide() {
				setTimeout(() => this.visible = false, 10)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.message-dialog
		display flex
		position absolute
		top 0
		right 0
		left 0
		bottom 0
		z-index 9999
		
		.md-mask
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			background-color rgba(0, 0, 0, .6)
			z-index -1
			
		.md-content
			margin auto
			width 72%
			max-width 40rem
			background-color #fff
			border-radius 1.6rem
			overflow hidden
			
			.md-header
				padding 2rem
				text-align center
				border-bottom .5px solid #eee
				
				.md-title
					margin-bottom 1rem
					font-size 1.8rem
					color #212832
					
				.md-message
					font-size 1.4rem
					line-height 1.8rem
			
			.md-content-buttons
				display flex
				transition all .1s
				
				[class^="md-buttons"]
					flex 1
					text-align center
					font-size 1.6rem
					line-height 5.4rem
					color #008DFA
					
					&:hover
						background-color #008DFA
						color #fff
	
</style>
