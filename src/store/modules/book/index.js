import mutations 	from './mutations'
import actions		from './actions'
import getters		from './getters'

const state = {
	fileName: '',
	menuVisible: false,
	settingVisible: -1,
	bookFontSize: 16,
	currentBook: null,
	fontPopupVisible: false,
	bookFontFamily: 'Default',
	bookTheme: 'Default',
	progress: 0,
	bookAvailable: false,
	section: 0,
	readerMinute: 0,
	readerHours: 0,
	isShowMask: false,
	cover: null,
	bookMeta: null,
	navigation: null,
	offsetY: 0,
	bookmarks: [],
	isBookmark: false
}

const book = {
	state,
	mutations,
	actions,
	getters
}

export default book
