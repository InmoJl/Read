<template>
	<section class="detail-copyright">
		<h3 class="dc-title">{{ $t('detail.copyright') }}</h3>
		<div class="dc-content">
			<div class="dc-content-item">
				<span class="dc-item-name">{{ $t('detail.publisher') }}</span>
				<span class="dc-item-value">{{ data.publisher || '-' }}</span>
			</div>
			<div class="dc-content-item">
				<span class="dc-item-name">{{ $t('detail.category') }}</span>
				<span class="dc-item-value">{{ getCategoryText(data.category) || '-' }}</span>
			</div>
			<div class="dc-content-item">
				<span class="dc-item-name">{{ $t('detail.lang') }}</span>
				<span class="dc-item-value">{{ getLanguageText(data.language) }}</span>
			</div>
		</div>
	</section>
</template>

<script>
	
	import { categoryText } from '@/utils/book'
	
	export default {
		name: 'DetailCopyright',
		props: {
			data: {
				default() { return {} } 
			}
		},
		methods: {
			getCategoryText(cateNumber) {
				return categoryText(cateNumber, this)
			},
			getLanguageText(lang) {
				if (!lang) return '-'
				
				return this.$t('detail.' + lang)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail-copyright
		padding 0 1rem
		margin-top 2rem
	
	.dc-title
		font-size 2rem
		
	.dc-content
		margin-top 1rem
	
		.dc-content-item
			display flex
			font-size 1.6rem
			line-height 2.4rem
			
			.dc-item-name
				width 10rem
			
			.dc-item-value
				flex 1
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
	
</style>
