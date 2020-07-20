<template>
	<transition name="fade">
		<div class="toast" v-show="visible">{{ text }}</div>
	</transition>
</template>

<script>
	
	export default {
		name: 'Toast',
		props: {
			text: {
				type: String,
				default: ''
			},
			delay: {
				type: Number,
				default: 1000
			}
		},
		data() {
			return {
				visible: false,
				timer: -1,
			}
		},
		methods: {
			show() {
				clearTimeout(this.timer)

				this.visible = true
				this.timer = setTimeout(this.hide, this.delay)
			},
			hide() {
				this.visible = false
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import "~@/assets/styles/animate.styl"
	
	.toast
		width 30rem
		height 5rem
		position absolute
		left 50%
		top 50%
		transform translate(-50%, -50%)
		z-index 99999
		background-color #fff
		box-shadow 0 0 10px rgba(0, 0, 0, .1)
		font-size 1.8rem
		border-radius 1.2rem
		text-align center
		line-height 5rem
		transition all .4s
	
</style>
