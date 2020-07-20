const getters = {
	fileName: 				state => state.fileName,
	menuVisible: 			state => state.menuVisible,
	settingVisible: 	state => state.settingVisible,
	bookFontSize: 		state => state.bookFontSize,
	currentBook: 			state => state.currentBook,
	fontPopupVisible:	state => state.fontPopupVisible,
	bookFontFamily:		state => state.bookFontFamily,
	bookTheme:				state => state.bookTheme,
	progress:					state => state.progress,
	bookAvailable:		state => state.bookAvailable,
	section:					state => state.section,
	readerMinute: 		state => state.readerMinute,
	readerHours: 			state => state.readerHours,
	isShowMask: 			state => state.isShowMask,
	cover:						state => state.cover,
	bookMeta:					state => state.bookMeta,
	navigation: 			state => state.navigation,
	offsetY:					state => state.offsetY,
	bookmarks:				state => state.bookmarks,
	isBookmark:				state => state.isBookmark
}

export default getters
