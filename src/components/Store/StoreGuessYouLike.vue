<template>
	<section class="guess-you-like">
		<card-header
			:title="$t('home.guessYouLike')"
			:btnText="$t('home.change')" />
		<div class="gyl-item"
			v-for="(item, index) in like"
			@click="gotoDetail(item)"
			:key="index">
			<div class="gyl-item-cover-wrap">
				<img class="gyl-item-cover" v-lazy="item.cover" alt="">
			</div>
			<div class="gyl-item-info">
				<h4 class="gyl-item-title">{{ item.title }}</h4>
				<p class="gyl-item-author">{{ item.author }}</p>
				<p class="gyl-item-result">{{ item.result }}</p>
			</div>
		</div>
	</section>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'StoreGuessYouLike',
		mixins: [bookClickMixin],
		props: {
			like: {
				default() {
					return []
				}
			}
		},
		components: {
			CardHeader
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.guess-you-like
		margin-top 2rem
	
	.gyl-header
		display flex
		justify-content space-between
		line-height 3rem
	
	.gyl-item
		display flex
		margin-top 1rem
		font-size 1.6rem
		
		.gyl-item-cover-wrap
			flex 1
			font-size 0
			
			.gyl-item-cover
				width 100%
				
		.gyl-item-info
			flex 4
			width 0
			margin-left 1rem
			
			.gyl-item-title,
			.gyl-item-author,
			.gyl-item-result
				white-space nowrap
				text-overflow ellipsis
				overflow hidden
	
</style>
