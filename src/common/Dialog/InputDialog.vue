<template>
	<section class="input-dialog" v-show="visible">
		<transition name="fade"><div class="ld-mask" @click="hide"></div></transition>
		<div class="id-container">
			<h4 class="id-title">{{ title }}</h4>
			<p class="id-input-wrap"><input class="id-input" type="text" placeholder="输入内容" v-model="inputData"></p>
			<div class="id-buttons">
				<button class="id-button" @click="$emit('ok', inputData)" >确认</button>
				<button class="id-button" @click="$emit('cancel', inputData)">取消</button>
			</div>
		</div>
	</section>
</template>

<script>
	
	export default {
		name: 'InputDialog',
		props: {
			title: {
				type: String,
				default: '输入修改的内容'
			}
		},
		data() {
			return {
				inputData: '',
				visible: false
			}
		},
		methods: {
			show() {
				this.visible = true
			},
			hide() {
				console.log(111);
				this.visible = false
			}
		}
	}
	
</script>

<style lang="stylus" scoepd>
	
	@import '~@/assets/styles/animate.styl'
	
	.input-dialog
		position fixed
		top 0
		left 0
		right 0
		bottom 0
		z-index 9999
		display flex
		background-color rgba(0, 0, 0, .6)
	
	.id-container
		margin auto
		width 300px
		border-radius 2rem
		box-shadow 0 0 10px 2px rgba(0, 0, 0, .2)
		overflow hidden
		background-color #fff
		
		.id-title
			font-size 2rem
			line-height 4rem
			text-align center
		
		.id-buttons
			display flex
			border-top 1px solid #eee
			
			.id-button
				flex 1
				border none
				outline none
				font-size 1.8rem
				line-height 4.6rem
				background-color #fff
				color #008DFA
				transition .2s
				
			.id-button:hover {
				background-color #008DFA
				color #fff
			}
				
		.id-input-wrap
			text-align center
			padding 0 2rem
			margin 2rem 0
			
			.id-input
				width 100%
				outline none
				font-size 1.8rem
				line-height 2.4rem
				border none
				border-bottom 1px solid #008DFA
				
	
</style>
