<template>
	<div class="card-header">
		<h4 class="ch-title">{{ title }}</h4>
		<span class="ch-btn" @click.stop="btnClickFn">{{ btnText }}</span>
	</div>
</template>

<script>
	
	export default {
		name: 'CardHeader',
		props: {
			title: '',
			btnText: '',
			btnClickFn: null
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.card-header
		display flex
		justify-content space-between
		line-height 3rem
		
		.ch-btn
			color #3498DB
	
</style>
