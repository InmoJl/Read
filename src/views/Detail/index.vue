<template>
	<div class="detail">
		<detail-topbar />
		<detail-info :data="info" />
		<detail-copyright :data="info" />
		<detail-navigation :data="navList" />
		<detail-function />
	</div>
</template>

<script>
	
	import DetailTopbar from '@/components/Detail/DetailTopbar'
	import DetailInfo from	'@/components/Detail/DetailInfo'
	import DetailCopyright from '@/components/Detail/DetailCopyright'
	import DetailNavigation from '@/components/Detail/DetailNavigation'
	import DetailFunction from '@/components/Detail/DetailFunction'
	
	import Epub from 'epubjs'
	
	import { detail } from '@/api'
	import { getCategoryName } from '@/utils/book'
	
	export default {
		name: 'Detail',
		data() {
			return {
				info: {},
				book: null,
				metaData: null,
				navigation: null,
				navList: []
			}
		},
		components: {
			DetailTopbar,
			DetailInfo,
			DetailCopyright,
			DetailNavigation,
			DetailFunction
		},
		created() {
			detail({
				fileName: this.$route.query.fileName,
				category: this.$route.query.category
			}).then(({ data }) => {
				this.info = data.data
				this.init()
			})
		},
		methods: {
			init() {
				this.book = new Epub(this.info.opf)
				this.book.loaded.metadata.then(meta => this.metaData = meta)
				this.book.loaded.navigation.then(nav => {
					this.navigation = nav
					this.navList = this.navigation.toc.map(item => item.label.trim())
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.detail
		width 100%
		height 100%
		display flex
		flex-direction column
		position relative
		background-color #fff
		
	
</style>
