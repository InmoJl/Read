<template>
	<section class="store-banner">
		<img class="store-banner-img" v-lazy="src" alt="">
	</section>
</template>

<script>
	
	export default {
		name: 'StoreBanner',
		props: {
			src: {
				default: ''
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.store-banner
		font-size 0
		
		.store-banner-img
			width 100%
	
</style>
