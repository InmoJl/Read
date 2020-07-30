<template>
	<div class="ebook-reader">
		<div id="read"></div>
		<div class="reader-mask"
			@click.stop="onMaskClick"
			@touchmove.stop="onMove"
			@touchend.stop="onEnd"></div>
	</div>
</template>

<script>
	
	import Epub from 'epubjs'
	import { ebookMixin } from '@/utils/mixin'
	import {
		getFontInfo,
		getFontSize,
		setFontFamily,
		getLocation,
		getBookmark
	} from '@/utils/localStorage'
	import { flatten } from '@/utils/book'

	export default {
		name: 'EbookReader',
		mixins: [ebookMixin],
		data() {
			return {
				book: null,
				rendition: null,
				touchStartX: null,
				touchTime: null,
				startPosY: 0
			}
		},
		mounted() {
			const fileName = this.$route.params.fileName.split('|').join('/') + '.epub'
			this.setFileName(fileName).then(this.initEpub)
		},
		computed: {
			windowWidth() {
				return window.innerWidth
			},
			rightPoint() {
				return this.windowWidth * 0.74
			},
			leftPoint() {
				return this.windowWidth * 0.26
			}
		},
		methods: {
			onMove(e) {
				if (this.menuVisible && this.bookAvailable) return
				
				const y = e.changedTouches[0].clientY
				
				if (this.startPosY)
					this.setOffsetY(parseInt((y - this.startPosY) / 4))
				else
					this.startPosY = y
				
				e.preventDefault()
			},
			onEnd(e) {
				this.startPosY = 0
				this.setOffsetY(0)
			},
			onMaskClick(e) {
				if (e.offsetX < this.leftPoint)
					this.prevPage()
				else if (e.offsetX > this.rightPoint)
					this.nextPage()
				else
					this.toggleTitleAndMenu()
			},
			prevPage() {
				this.rendition && this.rendition.prev().then(this.refreshLocation)
			},
			nextPage() {
				this.rendition && this.rendition.next().then(this.refreshLocation)
			},
			toggleTitleAndMenu() {
				
				if (this.menuVisible) {
					this.setSettingVisible(false)
					this.setFontPopupVisible(false)
				}
				
				this.setMenuVisible(!this.menuVisible)
			},
			loadFonts() {
				this.rendition.hooks.content.register(contents => {
					contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/asap.css`)
					contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/baloo2.css`)
					contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/dancingScript.css`)
					contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/dmMono.css`)
					contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/notoSerif.css`)
				})
			},
			gesture() {
				this.rendition.on('touchstart', event => {
					this.touchStartX  = event.changedTouches[0].clientX
					this.touchTime		= event.timeStamp
				})
				
				this.rendition.on('touchend', event => {
					const offsetX = event.changedTouches[0].clientX - this.touchStartX
					const time		= event.timeStamp - this.touchTime
					
					if (time < 500 && offsetX > 40)
						this.prevPage()
					else if (time < 500 && offsetX < -40)
						this.nextPage()
					else
						this.toggleTitleAndMenu()
					
					event.preventDefault()
					event.stopPropagation()
				})
			},
			createBook() {
				const baseURL = `${process.env.VUE_APP_RES_URL}/books/`
				
				this.book = new Epub(baseURL + this.fileName)
				this.setCurrentBook(this.book)
				
				this.rendition = this.book.renderTo('read', {
					width: 	window.innerWidth,
					height: window.innerHeight,
					method: 'default'
				})
			},
			initFontFamily(family) {
				this.rendition.themes.font(family)
				this.setBookFontFamily(family)
			},
			initFontSize(size) {
				this.rendition.themes.fontSize(size)
				this.setBookFontSize(size)
			},
			initMeta() {				
				const {fontFamily, fontSize} = getFontInfo()

				if (!fontFamily) {
					setFontFamily(this.bookFontFamily)
				}
				else {
					fontFamily && this.initFontFamily(fontFamily)
					fontSize && this.initFontSize(fontSize)
					
					this.refreshLocation()
				}
			},
			registerTheme() {
				this.themeList.forEach(theme => this.rendition.themes.register(theme.name, theme.style))
				this.rendition.themes.select(this.bookTheme)
			},
			loadLocation() {
				this.display(getLocation(this.fileName), this.initMeta)
			},
			pageNumber(locations) {
				
				this.navigation.forEach(nav => nav.pageList = [])
				
				let oldTmp = '',
						loc = null

				locations.forEach(item => {
					// 缓存相同，防止重复操作
					if (oldTmp !== item) loc = item.match(/\[(.*)\]!/)[1]

					this.navigation.forEach(nav => {
						let href = nav.href.match(/^(.*)\.html$/)
						if (!href) href = nav.href.match(/^(.*)\.xhtml$/)
						href = href[1].replace('html/', 'A')
						
						if (href == loc) nav.pageList.push(item)
					})
				})

				let currentPage = 1
				this.navigation.forEach(nav => {
					nav.page = currentPage
					// 如果pageList为零，则 +1
					currentPage += nav.pageList.length || 1
				})
			},
			pagination() {
				const workNumber= 750 * (window.innerWidth / 375) * getFontSize() / 16
				return this.book.locations.generate(workNumber).then(this.pageNumber)
			},
			completedPagination() {
				this.setBookAvailable(true)
				this.refreshLocation()
			},
			parseBookMeta() {
				this.book.loaded.cover.then(cover => {
					this.book.archive	.createUrl(cover).then(url => this.setCover(url))
				})
				
				this.book.loaded.metadata.then(meta => this.setBookMeta(meta))
				
				this.book.loaded.navigation.then(nav => {
					const navItems = flatten(nav.toc)
					
					function createLevel(item, level = 0) {
						return !item.parent ? level : createLevel(navItems.filter(parentItem => 
							parentItem.id === item.parent)[0], ++ level)
					}
					
					navItems.forEach(item => item.level = createLevel(item))
					
					this.setNavigation(navItems)
				})
			},
			initEpub() {
				this.createBook()
				this.loadLocation()
				// this.gesture()
				this.loadFonts()
				this.registerTheme()
				this.parseBookMeta()
				this.book.ready.then(this.pagination).then(this.completedPagination)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>

	.reader-mask
		position absolute
		top 0
		right 0
		bottom 0
		left 0
	
</style>
