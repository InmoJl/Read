<template>
	<div id="app">
		<transition :name="transitionName">
			<keep-alive :include="cacheComp" max="3">
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>

	import {
		cacheCompMixin
	} from '@/utils/mixin'

	export default {
		name: 'App',
		mixins: [cacheCompMixin],
		data() {
			return {
				transitionName: 'page-go'
			}
		},
		watch: {
			$route(to, from) {
				if (to.meta.index > from.meta.index)
					this.transitionName = 'page-go'
				else
					this.transitionName = 'page-back'
			}
		}
	}
</script>

<style lang="stylus">

	@import '//at.alicdn.com/t/font_1808340_e0wlm9stfbe.css';
	@import '~@/assets/styles/global.styl';
	@import '~@/assets/styles/animate.styl';

	*
		padding 0
		margin 0
		color #5d646e
	
	html,
	body
		font-size 62.5%
	
	body
		max-width 600px
		margin 0 auto

	#app
		width 100%
		height 100vh
		overflow hidden
		margin 0 auto
		
</style>
