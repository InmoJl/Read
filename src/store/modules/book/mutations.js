import {
	SET_FILENAME,
	SET_MENUVISIBLE,
	SET_SETTINGVISIBLE,
	SET_BOOKFONTSIZE,
	SET_CURRENTBOOK,
	SET_FONTPOPUPVISIBLE,
	SET_BOOKFONTFAMILY,
	SET_BOOKTHEME,
	SET_PROGRESS,
	SET_BOOKAVAILABLE,
	SET_SECTION,
	SET_READERMINUTE,
	SET_READERHOURS,
	SET_ISSHOWMASK,
	SET_COVER,
	SET_BOOKMETA,
	SET_NAVIGATION,
	SET_OFFSETY,
	SET_BOOKMARKS,
	SET_BOOKMARKSITEM,
	SET_ISBOOKMARK
} from './mutation-types'

const mutations = {
	[SET_FILENAME](state, fileName) {
		state.fileName = fileName
	},
	[SET_MENUVISIBLE](state, menuVisible) {
		state.menuVisible = menuVisible
	},
	[SET_SETTINGVISIBLE](state, settingVisible) {
		state.settingVisible = settingVisible
	},
	[SET_BOOKFONTSIZE](state, bookFontSize) {
		state.bookFontSize = bookFontSize
	},
	[SET_CURRENTBOOK](state, currentBook) {
		state.currentBook = currentBook
	},
	[SET_FONTPOPUPVISIBLE](state, fontPopupVisible) {
		state.fontPopupVisible = fontPopupVisible
	},
	[SET_BOOKFONTFAMILY](state, bookFontFamily) {
		state.bookFontFamily = bookFontFamily
	},
	[SET_BOOKTHEME](state, bookTheme) {
		state.bookTheme = bookTheme
	},
	[SET_PROGRESS](state, progress) {
		state.progress = progress
	},
	[SET_BOOKAVAILABLE](state, bookAvailable) {
		state.bookAvailable = bookAvailable
	},
	[SET_SECTION](state, section) {
		state.section = section
	},
	[SET_READERMINUTE](state, readerMinute) {
		state.readerMinute = readerMinute
	},
	[SET_READERHOURS](state, readerHours) {
		state.readerHours = readerHours
	},
	[SET_ISSHOWMASK](state, isShowMask) {
		state.isShowMask = isShowMask
	},
	[SET_COVER](state, cover) {
		state.cover = cover
	},
	[SET_BOOKMETA](state, bookMeta) {
		state.bookMeta = bookMeta
	},
	[SET_NAVIGATION](state, navigation) {
		state.navigation = navigation
	},
	[SET_OFFSETY](state, offsetY) {
		state.offsetY = offsetY
	},
	[SET_BOOKMARKS](state, bookmarks) {
		state.bookmarks = bookmarks
	},
	[SET_BOOKMARKSITEM](state, item) {
		state.bookmarks.push(item)
	},
	[SET_ISBOOKMARK](state, isBookmark) {
		state.isBookmark = isBookmark
	}
}

export default mutations
