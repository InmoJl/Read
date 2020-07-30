<template>
	<section class="ebook-listen" v-show="listenVisible">
		<listen-info :data="data"></listen-info>
		<listen-progress></listen-progress>
		<listen-control></listen-control>
		<listen-catelog></listen-catelog>
	</section>
</template>

<script>
	
	import ListenInfo from './components/ListenInfo'
	import ListenProgress from './components/ListenProgress'
	import ListenControl from './components/ListenControl'
	import ListenCatelog from './components/ListenCatelog'
	
	import { detailMixin } from '@/utils/mixin'
	
	export default {
		name: 'DetailListen',
		mixins: [detailMixin],
		props: {
			data: {
				type: [Object]
			}
		},
		components: {
			ListenControl,
			ListenProgress,
			ListenInfo,
			ListenCatelog
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
		padding 1rem 2rem

</style>
 