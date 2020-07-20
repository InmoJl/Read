<template>
	<section class="store-categories">
		<card-header
			:title="$t('home.category')" />
		<div class="sc-list">
			<div class="sc-item"
				v-for="(cate, index) in categories"
				@click.stop="gotoList(cate)"
				:key="index">
				<div class="sc-info">
					<h4 class="sc-info-title">{{ getCategoryText(cate.category) }}</h4>
					<p class="sc-info-num">{{ cate.num }} 本书</p>
				</div>
				<div class="sc-covers">
					<img class="sc-cover" v-lazy="cate.img1" alt="">
					<img class="sc-cover" v-lazy="cate.img2" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	
	import CardHeader from '@/common/CardHeader'
	
	import { categoryText, getCategoryName } from '@/utils/book'
	
	export default {
		name: 'StoreCategories',
		props: {
			categories: {
				default() {
					return []
				}
			}
		},
		components: {
			CardHeader
		},
		methods: {
			getCategoryText(cateNumber) {
				return categoryText(cateNumber, this)
			},
			gotoList(cate) {
				const name = getCategoryName(cate.category)
				
				this.$router.push({
					path: '/list',
					query: {
						cate: name
					}
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.store-categories
		margin-top 2rem
		
	.sc-list
		display flex
		justify-content space-between
		flex-wrap wrap
		
		.sc-item
			width 48%
			background-color #F1F1F1
			display flex
			align-items center
			margin-top 1rem
			font-size 1.2rem
			padding 2rem 0
			
			.sc-info
				flex 3
				text-align center
				
				.sc-info-title
					font-size 1.6rem
			
			.sc-covers
				flex 2
				display flex
				font-size 0
				
				.sc-cover
					width 50%
					float left
					position relative
					z-index 1
					
				.sc-cover:last-child
					z-index 0
					transform scale(.8) translateX(-50%)
	
</style>
