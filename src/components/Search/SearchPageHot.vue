<template>
	<div class="search-page-hot">
		<card-header
			:title="$t('home.hotSearch')"
			:btnText="$t('home.change')" />
		<ul class="sph-content">
			<li v-for="(item, index) in list"
				class="sph-content-item">
				<div class="sph-icon-wrap"><i class="iconfont icon-book"></i></div>
				<div>
					<h4 class="sph-title">{{ item.name }}</h4>
					<span class="sph-search-number">{{ item.searchNumber }} 人搜索</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	export default {
		name: 'SearchPageHot',
		data() {
			return {
				list: [
					{
						name: 'Self-Reported Population Health',
						searchNumber: 18189
					},
					{
						name: 'Library and infomation Sciences',
						searchNumber: 11089
					},
					{
						name: 'Global Business Strategy',
						searchNumber: 13466
					},
					{
						name: 'Corporate Data Quality',
						searchNumber: 10375
					},
					{
						name: 'verrechnungspreise',
						searchNumber: 39283
					}
				]
			}
		},
		components: {
			CardHeader
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.search-page-hot
		margin-top 2rem
		font-size 1.8rem
		
		.hsh-change
			color #3498DB
	
	.sph-header
		display flex
		justify-content space-between
		
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
			
			.sph-icon-wrap
				width 5rem
				text-align center

				.icon-book
					font-size 2.8rem
					color #B0B0B0
	
</style>
