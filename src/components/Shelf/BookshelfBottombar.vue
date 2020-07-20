<template>
	<transition name="slide-up" mode='in-out'>
		<div class="bookshelf-bottombar" v-show="isEditStatus">
			<div class="bb-cell"
				:class="{ 'checked': selectBooks.length }"
				v-for="(item, index) in items"
				@click="click(index)"
				:key="index">
				<span class="bb-cell-icon">
					<i class="iconfont" :class="item.icon"></i>
				</span>
				<p class="bb-cell-title">{{ item.label }}</p>
			</div>
		</div>
	</transition>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'BookshelfBottombar',
		mixins: [shelfMixin],
		data() {
			return {
				items:[{
						icon: 'icon-private',
						label: this.$t('shelf.private')
					}, {
						icon: 'icon-download',
						label: this.$t('shelf.download')
					}, {
						icon: 'icon-move',
						label: this.$t('shelf.move')
					}, {
						icon: 'icon-remove',
						label: this.$t('shelf.remove')
					}
				]
			}
		},
		methods: {
			click(index) {
				if (this.selectBooks.length <= 0) return
				
				switch(index) {
					case 0: this.privateReader(); break
					case 1: this.download(); break
					case 2: this.move(); break
					case 3: this.remove(); break
				}
			},
			remove() {
				const instanceOfPopup = this.$createPopup({
					$props: {
						title: '是否移出书架',
						dataList: [['确认', {color: '#E74C3C'}], '取消']
					},
					$events: {
						onTap: (index) => {
							if (index === 0) {
								const indexOfCate = this.$route.query.shelfIndex
								indexOfCate ? this.delBookOfCate(this.$route.query.shelfIndex) : this.delBook()
							}
							
							instanceOfPopup.hide()
							this.setIsEditStatus(false)
						}
					}
				})
				
				instanceOfPopup.show()
			},
			move() {
				this.$createListDialog().show()
			},
			download() {
				this.$createToast({$props: { text: '开始下载' }}).show()
			},
			privateReader() {
				this.$createMessageDialog().show()
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.bookshelf-bottombar
		position absolute
		z-index 999
		left 0
		right 0
		bottom 0
		height 6rem
		display flex
		align-items center
		background-color #fff
		box-shadow 0 0 12px rgba(0, 0, 0, .2)
		
		.bb-cell
			flex  1
			text-align center
			font-size 1.4rem
			
			.bb-cell-title
				color #B4B5B7
				transition color .2s
			
			.iconfont
				font-size 2.4rem
				color #B4B5B7
				transition color .2s
				
		.checked
			.bb-cell-title
				color inherit
			.iconfont
				color inherit
	
	
</style>
