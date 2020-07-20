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
	SET_ISBOOKMARK,
	SET_BOOKMARKSITEM
} from './mutation-types.js'

const actions = {
	setFileName({ commit }, fileName) {
		return commit(SET_FILENAME, fileName)
	},
	setMenuVisible({ commit }, menuVisible) {
		return commit(SET_MENUVISIBLE, menuVisible)
	},
	setSettingVisible({ commit }, settingVisible) {
		return commit(SET_SETTINGVISIBLE, settingVisible)
	},
	setBookFontSize({ commit }, bookFontSize) {
		return commit(SET_BOOKFONTSIZE, bookFontSize)
	},
	setCurrentBook({ commit }, currentBook) {
		return commit(SET_CURRENTBOOK, currentBook)
	},
	setFontPopupVisible({ commit }, fontPopupVisible) {
		return commit(SET_FONTPOPUPVISIBLE, fontPopupVisible)
	},
	setBookFontFamily({ commit }, fontFamily) {
		return commit(SET_BOOKFONTFAMILY, fontFamily)
	},
	setBookTheme({ commit }, bookTheme) {
		return commit(SET_BOOKTHEME, bookTheme)
	},
	setProgress({ commit }, progress) {
		return commit(SET_PROGRESS, progress)
	},
	setBookAvailable({ commit }, bookAvailable) {
		return commit(SET_BOOKAVAILABLE, bookAvailable)
	},
	setSection({ commit }, section) {
		return commit(SET_SECTION, section)
	},
	setReaderMinute({ commit }, readerMinute) {
		return commit(SET_READERMINUTE, readerMinute)
	},
	setReaderHours({ commit }, readerHours) {
		return commit(SET_READERHOURS, readerHours)
	},
	setIsShowMask({ commit }, isShowMask) {
		return commit(SET_ISSHOWMASK, isShowMask)
	},
	setCover({ commit }, cover) {
		return commit(SET_COVER, cover)
	},
	setBookMeta({ commit }, bookMeta) {
		return commit(SET_BOOKMETA, bookMeta)
	},
	setNavigation({ commit }, navigation) {
		return commit(SET_NAVIGATION, navigation)
	},
	setOffsetY({ commit }, offsetY) {
		return commit(SET_OFFSETY, offsetY)
	},
	setBookmarks({ commit }, bookmarks) {
		return commit(SET_BOOKMARKS, bookmarks)
	},
	setBookmarksItem({ commit }, bookmarksItem) {
		return commit(SET_BOOKMARKSITEM, bookmarksItem)
	},
	setIsBookmark({ commit }, isBookmark) {
		return commit(SET_ISBOOKMARK, isBookmark)
	}
}

export default actions
