<template>
	<section class="store-hot-recommend">
		<card-header
			:title="$t('home.recommend')"></card-header>
		<div class="shr-list">
			<div class="shr-item"
				v-for="(item, index) in recommend"
				@click="gotoDetail(item)"
				:key="index">
				<div class="shr-item-cover-wrap">
					<img class="shr-item-cover" v-lazy="item.cover" alt="">
				</div>
				<div class="shr-info">
					<h4 class="shr-info-title">{{ item.title }}</h4>
					<p class="shr-info-readers">{{ item.readers }}人在读</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	import { bookClickMixin } from '@/utils/mixin'
	
	export default {
		name: 'StoreHotRecommend',
		mixins: [bookClickMixin],
		props: {
			recommend: {
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
	
	.store-hot-recommend
		margin-top 2rem
	
	.shr-header
		display flex
		justify-content space-between
		line-height 3rem
		
	.shr-list
		display flex
		justify-content space-between
		
		.shr-item
			width 30%
			text-align center
			font-size 1.6rem
			
			.shr-item-cover-wrap
				font-size 0
				
				.shr-item-cover
					width 100%
				
			.shr-info-title
				display -webkit-box
				max-height 4rem
				overflow hidden
				text-overflow ellipsis
				-webkit-line-clamp 2
				line-clamp 2
				-webkit-box-orient vertical
				line-height 2rem
				
	
</style>
