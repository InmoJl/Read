<template>
	<section class="popup"
		v-show="popupVisible">
		<transition name="fade">
			<div class="popup-bg" v-show="visible" @click.stop.prevent="hide"></div>
		</transition>
		<transition name="popup-slide-up">
			<div class="popup-content" v-show="visible">
				<h4 class="popup-title">{{ title }}</h4>
				<div class="popup-select">
					<div class="popup-select-item"
						v-blister 
						v-for="(item, index) in dataList"
						:key="index"
						@click="$emit('onTap', index)"
						:style="bindStyle(item)">{{ getType(item) === 'String' ? item : item[0] }}</div>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'Popup',
		mixins: [shelfMixin],
		props: {
			title: {
				type: String,
				required: true
			},
			dataList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				popupVisible: false,
				visible: false
			}
		},
		methods: {
			show() {
				this.popupVisible = true
				setTimeout(() => this.visible = true)
			},
			hide() {
				this.visible = false
				setTimeout(() => this.popupVisible = false, 400)
			},
			bindStyle(item) {
				return (this.getType(item) === 'Array') ? Object.assign({}, item[1]) : null
			},
			getType(obj) {
				return Object.prototype.toString.call(obj).match(/\b(\S*)]/)[1]
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import "~@/assets/styles/animate.styl"
	
	.popup
		position absolute
		top 0
		left 0
		right 0
		bottom 0
		z-index 999
		
	.popup-bg
		width 100%
		height 100%
		background-color rgba(0, 0, 0, .6)
		transition .4s
		
	.popup-content
		position absolute
		left 0
		bottom 0
		width 100%
		background-color #fff
		transition .4s
		border-radius 1.6rem 1.6rem 0 0
		font-size 1.8rem
		line-height 5rem
		text-align center
		
		.popup-title
			border-bottom 1px solid #eee
			color inherit
			font-weight normal
			color #008DFA
		
		.popup-select-item
			transition .2s

</style>
