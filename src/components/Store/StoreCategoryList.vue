<template>
	<section class="store-category-list">
		<store-category-item
			v-for="(item, index) in categoryList"
			:category="item"
			:key="index"/>
	</section>
</template>

<script>
		
	import StoreCategoryItem from '@/components/Store/StoreCategoryItem'
		
	export default {
		name: 'StoreCategoryList',
		props: {
			categoryList: {
				default() {
					return []
				}
			}
		},
		components: {
			StoreCategoryItem
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.store-category-list
		margin-top 2rem
	
</style>
