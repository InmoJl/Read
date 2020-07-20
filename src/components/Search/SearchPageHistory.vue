<template>
	<div class="search-page-history">
		<card-header
			:title="$t('home.historySearch')"
			:btnText="$t('home.clear')" />
		<ul class="sph-content">
			<li v-for="(item, index) in list"
				class="sph-content-item"
				:key="index">
				<div class="sph-icon-wrap"><i class="iconfont icon-book"></i></div>
				<p class="sph-search-number">{{ item }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	export default {
		name: 'SearchHistory',
		data() {
			return {
				list: [
					'Self-Reported Population Health',
					'verrechnungspreise',
					'Library and infomation Sciences',
					'Global Business Strategy',
					'Self-Reported Population Health',
					'verrechnungspreise',
					'Global Business Strategy',
					'Corporate Data Quality',
					'Self-Reported Population Health',
					'Global Business Strategy',
					'verrechnungspreise'
				]
			}
		},
		components: {
			CardHeader
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.search-page-history
		margin-top 2rem
		font-size 1.8rem
	
	.sph-header
		display flex
		justify-content space-between
		font-size 1.8rem
		
		.sph-header-change
			color #3498DB
		
	.sph-content
		padding-bottom 1.4rem
		list-style none
	
		.sph-content-item
			display flex
			align-items center
			margin-top 1.4rem
			
			.sph-search-number
				font-size 1.6rem
				font-weight bold
			
			.sph-icon-wrap
				width 5rem
				text-align center
	
				.icon-book
					font-size 2.8rem
					color #B0B0B0
	
</style>
