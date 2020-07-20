<template>
	<transition name="fade">
		<section class="list-dialog" v-show="visible">
			<div class="ld-mask" @click="hide"></div>
			<div class="ld-content">
				<h4 class="ld-content-header">书籍分组</h4>
				<div class="ld-content-list">
					<div class="ld-content-item ld-content-create">
						<span class="ld-item-icon"><i class="iconfont icon-add"></i></span>
						<div class="ld-item-text ld-item-input-wrap">
							<input type="text"
								id="input-catename"
								class="ld-item-input"
								v-model:value="inputValue"
								@input="onInput"
								@keypress.enter="onEnter"
								@blur="reset">
							<label class="ld-item-label"
								for="input-catename">新建分组</label>
							<transition name="fade">
								<span class="ld-input-icon" v-show="isSuccess">
									<i class="iconfont icon-success"></i>
								</span>
							</transition>
						</div>
					</div>
					<div class="ld-content-item">移出分组</div>
					<transition-group name="list-complete" tag="div">
						<div class="ld-content-item overver-hidden"
							v-for="(cate, index) in categoryList"
							v-blister
							@click="addToCate(cate)"
							:key="cate.cateName">
							<span class="ld-item-icon"><i class="iconfont icon-folder"></i></span>
							<span class="ld-item-text">{{ cate.cateName }}</span>
						</div>
					</transition-group>
				</div>
				<div class="ld-content-button" @click="hide(true)">取消</div>
			</div>
		</section>
	</transition>
</template>

<script>
	
	import { shelfMixin } from '@/utils/mixin'
	
	export default {
		name: 'ListDialog',
		mixins: [shelfMixin],
		data() {
			return {
				visible: false,
				isEdit: false,
				isSuccess: false,
				inputValue: ''
			}
		},
		computed: {
			categoryList() {
				return this.shelfBooks.filter(book => !!book.cateName)
			},
			isCate() {
				return !!this.$route.query.shelfIndex
			},
		},
		methods: {
			show() {
				this.visible = true
			},
			hide(isButton) {
				// 如果是按钮触发的，则等待按钮做完动画
				if (isButton)
					setTimeout(() => this.visible = false, 100)
				else
					this.visible = false
			},
			add() {
				const cateName = this.inputValue.trim(),
					id = `cate${(Math.random() * 100000) | 0}`
					
				this.verifyCate(cateName) && this.pushBook({id, cateName, books: []})
			},
			onInput(e) {
				const v = e.target.value.trim()
				
				if (v === '' || v === ' ' && this.isSuccess)
					this.isSuccess = false
				else
					this.isSuccess = true
			},
			reset() {
				this.isSuccess = false
				this.inputValue = ''
			},
			onEnter(e) {
				this.add()
				e.target.blur()
			},
			verifyCate(cate) {
				if (cate === '' || cate === ' ') return false
				
				return this.categoryList.every(item => item.cateName !== cate)
			},
			addToCate(cate) {

				if (this.$route.query.cate === cate.cateName) return
				
				// 遍历选择的书下标
				let index = -1,
					indexs = []
			
				// 浅拷贝数组
				Object.assign(indexs, this.selectBooks)
				
				while ((index = indexs.pop()) !== undefined) {
					// 添加到分类数组
					if (this.isCate && this.$route.query.cate !== cate.cateName) {
						const cateIndex = this.$route.query.shelfIndex
						const sourceCate = this.shelfBooks[cateIndex]
						cate.books.push(sourceCate.books[index])
						sourceCate.books.splice(index, 1)
					} else {
						cate.books.push(this.shelfBooks[index])
						this.removeBookOfIndex(index)
					}
				}

				this.clearSelectBooks()
				this.hide()
				
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import "~@/assets/styles/animate.styl"
	
	.list-complete-enter,
	.list-complete-leave-to
		opacity 0
		transform translateX(50px)
		
	.list-complete-leave-active
		position absolute
	
	.list-dialog
		display flex
		position absolute
		top 0
		left 0
		right 0
		bottom 0
		z-index 9999
		transition .4s
		
		.ld-mask
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			background-color rgba(0, 0, 0, .6)
			z-index -1
		
		.ld-content
			width 72%
			max-width 40rem
			margin auto
			background-color #fff
			border-radius 1.6rem
			overflow hidden
			position relative
			transition .4s
			
			.ld-content-header
				text-align center
				font-size 2.4rem
				line-height 5rem
				margin-top 3rem
				color #000
			
			.ld-content-list
				padding 2rem 0
				transition all .4s
				
				.overver-hidden
					overflow hidden
				
				.ld-content-item
					display flex
					position relative
					align-items center
					padding 1.2rem 2rem
					line-height 1.8rem
					font-size 1.6rem
					transition all .4s
				
					.ld-item-icon
						margin-right 1rem
						
						.iconfont
							font-size 1.6rem
							font-weight bold
							
					.ld-item-text
						flex 1
						padding 1rem 0
						white-space nowrap
						
					.ld-item-input-wrap
						position relative
						padding 0
						
						.ld-item-input
							width 100%
							outline none
							border none
							line-height 1.8rem
							padding 1rem 0
							position relative
							color #212832
							
							&:focus
								border-bottom 2px solid #008DFA
						
						.ld-item-label
							position absolute
							left 0
							// 字符大小 / 2 = 8
							top calc(50% - .8rem)
							transition transform .2s
							
						.ld-item-input:focus + .ld-item-label
							transform translateY(calc(-100% - 1rem))
							
						.ld-input-icon
							position absolute
							top 50%
							right 0
							transform translateY(-50%)
							animation success .2s
							
							.icon-success
								font-size 2.6rem
				
				.ld-content-create *
					color #1b88ee
			
			.ld-content-button
				width 100%
				height 5.4rem
				line-height 6rem
				text-align center
				font-size 1.8rem
				color #fff
				background-color #008DFA
				transition .1s
				
				&:hover
					background-color #0672c5
		
	
</style>
