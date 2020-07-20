import {
	SET_SCROLLY,
	SET_SEARCHPAGEVISIBLE,
	SET_TITLEBARVISIBLE,
	SET_FLAPCARDVISIBLE,
	SET_RECOMMENDBOOKS,
	SET_ISRANDOMBOOK,
	SET_BOOKS
} from './mutation-types'

const mutations = {
	[SET_SCROLLY](state, scrollY) {
		state.scrollY = scrollY
	},
	[SET_SEARCHPAGEVISIBLE](state, searchPageVisible) {
		state.searchPageVisible = searchPageVisible
	},
	[SET_TITLEBARVISIBLE](state, titleBarVisible) {
		state.titleBarVisible = titleBarVisible
	},
	[SET_FLAPCARDVISIBLE](state, flapCardVisible) {
		state.flapCardVisible = flapCardVisible
	},
	[SET_RECOMMENDBOOKS](state, recommendBooks) {
		state.recommendBooks = recommendBooks
	},
	[SET_ISRANDOMBOOK](state, isRandomBook) {
		state.isRandomBook = isRandomBook
	},
	[SET_BOOKS](state, books) {
		state.books = books
	}
}

export default mutations
