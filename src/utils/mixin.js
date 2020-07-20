import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { themeList } from './book'
import { getCategoryName } from './book'
import {
	saveLocation
} from '@/utils/localStorage'

export const ebookMixin = {
	computed: {
		...mapGetters([
			'fileName',
			'menuVisible', 
			'settingVisible',
			'bookFontSize',
			'bookFontFamily',
			'currentBook',
			'fontPopupVisible',
			'bookTheme',
			'progress',
			'bookAvailable',
			'section',
			'readerMinute',
			'readerHours',
			'isShowMask',
			'cover',
			'bookMeta',
			'navigation',
			'offsetY',
			'bookmarks',
			'isBookmark'
		]),
		themeList() {
			return themeList(this)
		}
	},
	methods: {
		...mapActions([
			'setFileName',
			'setMenuVisible',
			'setSettingVisible',
			'setBookFontSize',
			'setBookFontFamily',
			'setCurrentBook',
			'setFontPopupVisible',
			'setBookTheme',
			'setProgress',
			'setBookAvailable',
			'setSection',
			'setReaderMinute',
			'setReaderHours',
			'setIsShowMask',
			'setCover',
			'setBookMeta',
			'setNavigation',
			'setOffsetY',
			'setBookmarks',
			'setBookmarksItem',
			'setIsBookmark'
		]),
		refreshLocation() {
			const startLocation = this.currentBook.rendition.currentLocation().start
			if (startLocation) {
				const cfi = startLocation.cfi
				const progress = this.currentBook.locations.percentageFromCfi(cfi)
				this.setProgress(Math.floor(progress * 100))
				this.setSection(startLocation.index)
				saveLocation(this.fileName, cfi)
			}

			const isFind = this.bookmarks.find(item => item.cfi === startLocation.cfi)
			if (isFind)
				this.setIsBookmark(true)
			else
				this.setIsBookmark(false)
		},
		display(target, fn) {
			if (target)
				this.currentBook.rendition.display(target).then(this.refreshLocation).then(() => fn && fn())
			else
				this.currentBook.rendition.display().then(this.refreshLocation).then(() => fn && fn())
		},
		hideMenu() {
			this.setSettingVisible(-1)
			this.setMenuVisible(false)
		},
	}
}

export const storeMixin = {
	computed: {
		...mapGetters([
			'scrollY',
			'searchPageVisible',
			'titleBarVisible',
			'flapCardVisible',
			'recommendBooks',
			'isRandomBook',
			'books'
		])
	},
	methods: {
		...mapActions([
			'setScrollY',
			'setSearchPageVisible',
			'setTitleBarVisible',
			'setFlapCardVisible',
			'setRecommendBooks',
			'setIsRandomBook',
			'setBooks'
		]),
	}
}

export const bookClickMixin = {
	methods: {
		gotoDetail(book) {
			
			if (!book || book.cateName) return
			
			let cate = book.categoryText
			if (!cate) cate = getCategoryName(book.category)
			
			this.$router.push({
				path: '/detail',
				query: {
					fileName: book.fileName,
					category: cate
				}
			})
		}
	}
}

export const shelfMixin = {
	computed: {
		...mapGetters([
			'shelfBooks',
			'isEditStatus',
			'countCompleteBooks',
			'bookMaxHeight',
			'selectBooks'
		])
	},
	methods: {
		...mapActions([
			'setShelfBooks',
			'pushBook',
			'pushBookOfCate',
			'delBook',
			'delBookOfCate',
			'removeBook',
			'removeBookOfIndex',
			'removeBookOfCate',
			'setIsEditStatus',
			'setCountCompleteBooks',
			'setBookMaxHeight',
			'pushSelectBooks',
			'removeSelectBook',
			'clearSelectBooks'
		])
	}
}

export const cacheCompMixin = {
	computed: {
		...mapGetters([
			'cacheComp'
		])
	},
	methods: {
		...mapActions([
			'setCacheComp',
			'popCacheComp'
		])
	},
	beforeRouteLeave(to, from, next) {
		this.setCacheComp(from.name).then(() => next())
	},
	beforeRouteEnter(to, from, next) {
		next(vm => vm.popCacheComp())
	}
}

