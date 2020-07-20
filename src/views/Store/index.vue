<template>
  <section class="store">
		<search />
		<flap-card />
		<div class="store-content" @scroll="onScroll">
			<store-banner :src="banner" />
			<store-guess-you-like :like="like" />
			<store-hot-recommend :recommend="recommend" />
			<store-featured :featured="featured" />
			<store-category-list :categoryList="categoryList" />
			<store-categories :categories="categories" />
		</div>
  </section>
</template>

<script>

	import Search from '@/components/Search'
	import FlapCard from '@/components/Search/FlapCard'
	import StoreBanner from '@/components/Store/StoreBanner'
	import StoreGuessYouLike from '@/components/Store/StoreGuessYouLike'
	import StoreHotRecommend from '@/components/Store/StoreHotRecommend'
	import StoreFeatured from '@/components/Store/StoreFeatured'
	import StoreCategoryList from '@/components/Store/StoreCategoryList'
	import StoreCategories from '@/components/Store/StoreCategories'
	
	import { storeMixin } from '@/utils/mixin'
	import { home, list } from '@/api'

  export default {
    name: 'Store',
		mixins: [storeMixin],
		data() {
			return {
				banner: '',
				like: [],
				recommend: [],
				featured: [],
				categories: [],
				categoryList: []
			}
		},
		components: {
			Search,
			FlapCard,
			StoreBanner,
			StoreGuessYouLike,
			StoreHotRecommend,
			StoreFeatured,
			StoreCategoryList,
			StoreCategories
		},
		methods: {
			onScroll({target}) {
				this.setScrollY(target.scrollTop).then(this.checkState)
			},
			checkState() {
				if (this.scrollY > 0 && this.titleBarVisible)
					this.setTitleBarVisible(false)
				else if (this.scrollY === 0 && !this.titleBarVisible)
					this.setTitleBarVisible(true)
			}
		},
		mounted() {
			list().then(({ data }) => this.setBooks(data.data))
			home().then(({ data }) => {
				this.setRecommendBooks(data.random)
				this.banner = data.banner
				this.like = data.guessYouLike
				this.like.length = 3
				this.recommend = data.recommend
				this.featured = data.featured
				this.categories = data.categories
				this.categoryList = data.categoryList
			})
		}
  }
  
</script>

<style lang="stylus" scoped>
	
	.store
		width 100%
		height 100%
		display flex
		flex-direction column
		background-color #fff
		
		.store-content
			box-sizing border-box
			flex 1
			overflow hidden auto
			font-size 1.8rem
			padding 1rem
	
</style>
