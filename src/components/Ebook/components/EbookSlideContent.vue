<template>
	<div class="ebook-slide-content">
		<section class="esc-search-wrap">
			<div class="esc-search">
				<div class="esc-search-icon"><i class="iconfont icon-search"></i></div>
				<input type="text"
					class="esc-search-input"
					@click="searchResultVisible = true"
					@keyup.enter.exact="search()"
					v-model="searchText"
					:placeholder="$t('book.searchHint')">
			</div>
			<button
				class="esc-search-cancle"
				@click.stop="searchResultVisible = false"
				v-show="searchResultVisible">取消</button>
		</section>
		<section class="esc-info-wrap" v-show="!searchResultVisible">
			<div class="esc-book-cover">
				<img class="esc-book-cover-img" :src="cover" alt="">
			</div>
			<div class="esc-book-info" v-if="dateComplete">
				<div class="esc-book-meta">
					<p class="esc-book-title">{{ bookMeta.title }}</p>
					<p class="esc-book-author">{{ bookMeta.creator }}</p>
				</div>
				<div class="esc-book-tip">
					<p class="esc-book-progress">{{ progress }}%已读</p>
					<p class="esc-book-readed">已读 {{ readedTime }} 分钟</p>
				</div>
			</div>
		</section>
		<section class="esc-toc"
			v-show="!searchResultVisible">
			<ol class="esc-toc-list">
				<li class="esc-toc-item"
					v-for="(item, index) in navigation"
					:class="{selected: section === index}"
					:style="{'margin-left': `${item.level * 16}px`}"
					@click.stop="slideDisplay(item.href)"
					:key="index">
					<span class="esc-toc-item-text">{{ item.label.trim() }}</span>
					<span class="esc-toc-item-number">{{ item.page }}</span>
				</li>
			</ol>
		</section>
		<section class="esc-search-result" v-show="searchResultVisible">
			<p v-if="searchResults === null">等待输入...</p>
			<ol class="esc-sr-list" v-else-if="searchResults.length">
				<li class="esc-sr-item"
					v-for="(item, index) in searchResults"
					:key="index"
					v-html="item.excerpt"
					@click.stop="searchResultDisplay(item.cfi)"></li>
			</ol>
			<p v-else>没有找到内容</p>
		</section>
	</div>
</template>

<script>
	
	import { ebookMixin } from '@/utils/mixin'
	
	export default {
		name: 'EbookSlideContent',
		mixins: [ebookMixin],
		data() {
			return {
				searchResultVisible: false,
				searchResults: null,
				searchText: ''
			}
		},
		methods: {
			searchResultDisplay(cfi, highlight = true) {
				this.display(cfi, this.hideMenu)
				if (highlight) this.currentBook.rendition.annotations.highlight(cfi)
			},
			slideDisplay(target) {
				this.display(target, this.hideMenu)
			},
			search() {
				if (this.searchText.trim().length > 0) {
					this.doSearch(this.searchText).then(res => {
						this.searchResults = res.map(item => {
							const str = `<span style="color: #1BA1E2; font-weight: bold">${this.searchText}</span>`
							item.excerpt = item.excerpt.trim().replace(this.searchText, str)
							return item
						})
						this.searchText = ''
					})
				}
			},
			doSearch(query) {
				return Promise.all(this.currentBook.spine
					.spineItems.map(item => item.load(
						this.currentBook.load.bind(this.currentBook))
							.then(item.find.bind(item, query))
							.finally(item.unload.bind(item))
					)
				).then(results => Promise.resolve([].concat.apply([], results)))
			}
		},
		computed: {
			dateComplete() {
				return this.bookMeta !== null
			},
			readedTime() {
				if (this.readerHours)
					return `${this.readerHours}时 ${this.readerMinute}`
				else
					return `${this.readerMinute}`
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	
	.ebook-slide-content
		width 100%
		height 100%
		box-sizing border-box
		padding 1rem
		display flex
		flex-direction column
		overflow hidden
	
	.esc-search-wrap
		width 100%
		display flex
		align-items center
		box-sizing border-box
		margin-top 2rem
		
		.esc-search
			flex 1
			display flex
			align-items center
			border 2px solid #B0B0B0
			box-sizing border-box
			padding .4rem
			transition .2s
			
			.esc-search-icon
				width 2rem
				text-align center
				
				.icon-search
					display block
		
			.esc-search-input
				flex 1
				height 2rem
				border none
				outline none
				
		.esc-search-cancle
			width 5rem
			height 2rem
			outline none
			border none
			background-color transparent
			float left

	.esc-info-wrap
		width 100%
		display flex
		padding 1rem 0
		margin-bottom 1rem
		border-bottom 1px solid #ccc
		
		.esc-book-cover
			flex 1
			font-size 0
			
			.esc-book-cover-img
				width 100%
				
		.esc-book-info
			flex 5
			display flex
			align-items center
			font-size 1.4rem
			
			.esc-book-meta
				flex 1
				width 0
				box-sizing border-box
				padding 0 .2rem
				
				.esc-book-title
					overflow hidden
					text-overflow ellipsis
					display -webkit-box
					-webkit-line-clamp 2
					line-clamp 2
					-webkit-box-orient vertical
					margin-bottom .4rem
					font-weight bold
					
				.esc-book-author
					white-space nowrap
					text-overflow ellipsis
					overflow hidden
					word-break break-all
			
			.esc-book-tip
				flex 1
				box-sizing border-box
				padding 0 .2rem
	
	.esc-search-result,
	.esc-toc
		flex 1
		width 100%
		height 100%
		overflow hidden
	
	.esc-sr-list,
	.esc-toc-list
		width 100%
		height 100%
		list-style none
		overflow-y auto
			
	.esc-toc-item
		font-size 1.8rem
		line-height 3.6rem
		display flex
		
		.esc-toc-item-text
			flex 5
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
		
		.esc-toc-item-number
			flex 1
			text-align right
			
	.selected > span
		color #1BA1E2
			
	.esc-sr-list .esc-sr-item
		padding 1rem 0
		border-bottom 1px dashed #ccc
		
	.esc-sr-list .esc-sr-item:last-child
		margin-bottom 0
		border-bottom none
		
	
</style>
