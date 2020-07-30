<template>
	<div class="listen-info">
		<div class="li-header">
			<span class="li-header-wrap" @click="onClose"><i class="iconfont icon-down"></i></span>
			<span class="li-header-wrap"><i class="iconfont icon-more"></i></span>
		</div>
		<div class="li-info">
			<div class="li-cover-wrap">
				<img class="li-cover" :src="data.cover" alt="">
			</div>
			<h4 class="li-info-name">{{ data.title }}</h4>
			<h3 class="li-info-current">This listen article is test</h3>
		</div>
	</div>
</template>

<script>
	
	import { detailMixin } from '@/utils/mixin'
	
	export default {
		name: 'ListenInfo',
		mixins: [detailMixin],
		props: {
			data: {
				type: Object
			}
		},
		methods: {
			onClose() {
				this.setListenVisible(false)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.li-header
		display flex
		justify-content space-between
		
		.li-header-wrap .iconfont
			font-size 2.4rem
	
	.li-info
		width 100%
		text-align center
		margin-top 10rem
		
		.li-cover-wrap
			width 40%
			font-size 0
			margin 0 auto
			box-shadow 3px 3px 4px 1px rgba(0, 0, 0, .4)
			
			.li-cover
				width 100%
				
		.li-info-name
			font-size 1.6rem
			color #B0B0B0
			line-height 3rem
		
		.li-info-current
			font-size 2rem
			line-height 3rem
	
</style>
