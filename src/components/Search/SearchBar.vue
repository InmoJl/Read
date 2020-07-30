<template>
	<div class="store-bar"
		:class="{'shrink-height': !titleBarVisible}">
		<div class="search-bar-title-wrap">
			<div class="icon-wrap icon-back-wrap" @click.stop="onBack">
				<i class="iconfont icon-back"></i>
			</div>
			<transition name="slide-down">
				<div class="search-bar-move-wrap" v-show="titleBarVisible">
					<h4>书城</h4>
					<div class="icon-wrap icon-random-wrap" @click.stop="showFlapCard">
						<i class="iconfont icon-random"></i>
					</div>
				</div>
			</transition>
		</div>
		<div class="search-bar-input-container">
			<div class="search-bar-input-wrap">
				<i class="iconfont icon-search"></i>
				<input
					class="search-bar-input"
					type="text"
					ref="input"
					placeholder="计算机科学和软件工程"
					@focus.stop="onFocus"
					@keyup.enter="onEnter">
			</div>
		</div>
	</div>
</template>

<script>
	
	import { storeMixin } from '@/utils/mixin'
	
	export default {
		name: 'SearchBar',
		mixins: [storeMixin],
		data() {
			return {
				inputBeforeState: true
			}
		},
		methods: {
			onFocus() {
				if (this.searchPageVisible) return
				
				this.inputBeforeState = this.titleBarVisible
				this.setTitleBarVisible(false)
				this.setSearchPageVisible(true)
				
				this.$emit('resetSearchPage')
			},
			onBack() {
				
				if (this.$route.name === 'Store') {
					this.$router.push('/bookshelf')
				}
				
				this.$refs.input.value = ''
				this.setTitleBarVisible(this.inputBeforeState)
				this.setSearchPageVisible(false)
			},
			showFlapCard() {
				this.setFlapCardVisible(true).then(() => this.setIsRandomBook(true))
			},
			onEnter(e) {
				
				const findBookName = e.target.value
				if (findBookName === '') return
				
				this.$router.push({
					path: '/list',
					query: {
						q: findBookName
					}
				})
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.store-bar
		height 9rem
		position relative
		transition height .4s linear
		z-index 999
		
		.search-bar-title-wrap
			display flex
			justify-content space-between
			align-items center
			font-size 2rem
			line-height 2.4rem
			padding 1.3rem 0
			
			.iconfont
				font-size 2.4rem
				
			.icon-wrap
				width 2.4rem
				height 2.4rem
				text-align center
				line-height 2.4rem
				
			.icon-back-wrap
				position absolute
				left 1rem
				top 1.3rem
				transition left .4s
				z-index 9
				
			.search-bar-move-wrap
				flex 1
				position relative
				text-align center
					
			.icon-random-wrap
				position absolute
				right 1rem
				top 0
		
		.search-bar-input-container
			position absolute
			top 5rem
			left 1rem
			right 1rem
			height 4rem
			background-color #fff
			transition .4s
			transition-property left, top
			
			.search-bar-input-wrap
				display flex
				align-items center
				background-color #f4f4f4
				border-radius 2rem
				line-height 4rem
				padding 0 1rem
				
				.iconfont
					margin-right 1rem
					font-size 2.4rem
				
				.search-bar-input
					flex 1
					font-size 1.6rem
					background none
					border none
					outline none
					
					&::placeholder
						color #CCC
	
	.shrink-height
		height 5rem
		
		.search-bar-title-wrap .icon-back-wrap
			left .5rem
			
		.search-bar-input-container
			top .5rem
			left 3.4rem

</style>
