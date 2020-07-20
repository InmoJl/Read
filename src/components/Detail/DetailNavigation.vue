<template>
	<section class="detail-navigation">
		<h3 class="dn-title">{{ $t('detail.navigation') }}</h3>
		<ol class="dn-list">
			<li class="dn-list-item"
				v-for="(item, index) in data"
				:key="index">{{ item }}</li>
		</ol>
	</section>
</template>

<script>
	
	export default {
		name: 'DetailNavigation',
		props: {
			data: {
				default() { return [] }
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail-navigation
		flex 1
		margin-top 2rem
		padding 0 1rem
		overflow hidden auto
		
		.dn-title
			font-size 2rem
		
		.dn-list
			margin-top 1rem
		
			.dn-list-item
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
				list-style none
				font-size 1.6rem
				line-height 4rem
		
</style>
