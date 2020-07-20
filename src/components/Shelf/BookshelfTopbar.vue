<template>
	<div class="bookshelf-topbar">
		<div class="bt-left">
			<div class="bt-left-wrap" :class="{ cate: isCate, edit: isCate && isEditStatus }">
				<span class="bt-clear">{{ $t('shelf.clearCache') }}</span>
				<span class="bt-back" @click="$router.go(-1)">
					<i class="iconfont icon-back"></i>
				</span>
				<span class="bt-modify" @click="onEditGroup">{{ $t('shelf.editGroup') }}</span>
			</div>
		</div>
		<h4 class="bt-title">{{ title }}</h4>
		<span class="bt-edit" @click="toggleEditStatus">
			{{ isEditStatus ? $t('shelf.cancel') : $t('shelf.edit') }}
		</span>
	</div>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookshelfTopbar',
		mixins: [shelfMixin],
		methods: {
			toggleEditStatus() {
				this.setIsEditStatus(!this.isEditStatus)
			},
			onEditGroup() {
				const popup = this.$createPopup({
					$props: {
						title: '选择要进行的操作',
						dataList: ['修改分组名', '删除分组']
					},
					$events: {
						onTap: (index) => {
							if (index === 0) {
								this.createInputDialog()
								popup.hide()
							}
						}
					}
				}).show()
			},
			createInputDialog() {
				const inputDialog = this.$createInputDialog({
					$events: {
						ok: (inputData) => {
							this.shelfBooks[this.$route.query.shelfIndex].cateName = inputData
							inputDialog.hide()
						},
						cancel: () => {
							inputDialog.hide()
						}
					}
				}).show()
			}
		},
		computed: {
			isCate() {
				return this.$route.name === 'BookshelfCategory'
			},
			title() {
				if (this.$route.path === '/bookshelf/category')
					return this.shelfBooks[this.$route.query.shelfIndex].cateName
				else
					return this.$t('shelf.title')
			}
		},
		watch: {
			$route(to) {
				if (to.path === '/bookshelf/category') {
					
				}
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.bookshelf-topbar
		height 5rem
		padding 0 1rem
		display flex
		justify-content space-between
		line-height 5rem
		
		.bt-title
			flex 1
			font-size 2rem
			text-align center
			
		.bt-edit
			width 12rem
			text-align right
			color #B4B5B7
			font-size 1.8rem
			
		.bt-left
			width 12rem
			overflow hidden
			
			.bt-left-wrap
				width 36rem
				display flex
				transition transform .2s
				text-indent 1rem
			
				.bt-clear
					flex 1
					color #B4B5B7
					font-size 1.8rem
				
				.bt-back
					flex 1
					text-align left
					font-size 2.4rem
					color #b4b5b7
					
					.iconfont
						font-size 2rem
						
				.bt-modify
					flex 1
					font-size 1.8rem
					color #b4b5b7
					
			.cate
				transform translateX(-12rem)
				
			.edit
				transform translateX(-24rem)
		
	
</style>
