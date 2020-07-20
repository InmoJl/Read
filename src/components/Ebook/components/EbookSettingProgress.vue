<template>
	<transition name="slide-up">
		<div class="ebook-setting-progress" 
			v-show="menuVisible && settingVisible === 2">
			<p class="esp-time">已阅读 {{ readedTime }}</p>
			<div class="esp-control">
				<span class=" esp-control-back" @click.stop="prevSection">
					<i class="iconfont icon-forward"></i>
				</span>
				<input class="esp-progress"
					type="range"
					value=""
					max="100"
					min="0"
					step="1"
					:value="progress"
					:disabled="!bookAvailable"
					@input="onProgressInput($event.target.value)"
					@change.stop="onProgressChange($event.target.value)"
					ref="progress" />
				<span class="esp-control-next" @click.stop="nextSection">
					<i class="iconfont icon-forward"></i>
				</span>
			</div>
			<p class="esp-percentage">
				<span class="esp-section-title">{{ sectionName }}</span>
				<span class="esp-section-progress">({{ progress + '%' }})</span>
			</p>
		</div>
	</transition>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookSettingProgress',
		mixins: [ebookMixin],
		data() {
			return {
				hours: 0
			}
		},
		methods: {
			displayProgress(){
				const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
				this.display(cfi)
			},
			onProgressChange(value) {
				this.setProgress(value).then(this.displayProgress)
			},
			onProgressInput(value) {
				this.setProgress(value).then(this.updateProgressBackground)
			},
			updateProgressBackground() {
				this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
			},
			displaySection() {
				const sectionInfo = this.currentBook.section(this.section)
				
				if (sectionInfo && sectionInfo.href)
					this.display(sectionInfo.href)
			},
			prevSection() {
				if (this.section > 0 && this.bookAvailable)
					this.setSection(this.section - 1).then(this.displaySection)
			},
			nextSection() {
				if (this.section < this.spineLength && this.bookAvailable)
					this.setSection(this.section + 1).then(this.displaySection)
			}
		},
		computed: {
			spineLength() {
				return this.currentBook.spine.length - 1
			},
			sectionName() {
				return this.section ? this.navigation[this.section].label : ''
			},
			readedTime() {
				if (this.readerHours)
					return `${this.readerHours}时 ${this.readerMinute} 分钟`
				else
					return `${this.readerMinute} 分钟`
			}
		},
		updated() {
			this.updateProgressBackground()
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	@import '~@/assets/styles/animate.styl'
	
	.ebook-setting-progress
		position absolute
		left 0
		right 0
		bottom 5rem
		background-color #fff
		padding 0 .8rem
		box-shadow 0 -0.6rem 1.2rem rgba(0, 0, 0, .2)
		
		.esp-time,
		.esp-percentage
			text-align center
			line-height 3rem
			display flex
			justify-content center
			
			.esp-section-title
				display inline-block
				max-width 80%
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
				
			.esp-section-progress
				display inline-block
			
		.esp-control
			display flex
			align-items center
			
			.esp-control-back,
			.esp-control-next
				width 3.4rem
				text-align center
				
			.esp-control-back
				transform rotate(180deg)
			
			.esp-progress
				flex 1
				margin 0 1rem
				-webkit-appearance none
				background -webkit-linear-gradient(#1BA1E2, #1BA1E2) no-repeat, #b4b5b7
				background-size 0 100%

				&::-webkit-slider-thumb
					-webkit-appearance: none;
					box-sizing content-box
					width .6rem
					height .6rem
					background-color #fff
					border 0.4rem solid #1BA1E2
					border-radius 50%
					transform translateY(-0.5rem)
				
				&::-webkit-slider-runnable-track
					height .4rem

</style>
