import {
	SET_SCROLLY,
	SET_SEARCHPAGEVISIBLE,
	SET_TITLEBARVISIBLE,
	SET_FLAPCARDVISIBLE,
	SET_RECOMMENDBOOKS,
	SET_ISRANDOMBOOK,
	SET_BOOKS
} from './mutation-types'

const actions = {
	setScrollY({ commit }, scrollY) {
		return commit(SET_SCROLLY, scrollY)
	},
	setSearchPageVisible({ commit }, searchPageVisible) {
		return commit(SET_SEARCHPAGEVISIBLE, searchPageVisible)
	},
	setTitleBarVisible({ commit }, titleBarVisble) {
		return commit(SET_TITLEBARVISIBLE, titleBarVisble)
	},
	setFlapCardVisible({ commit }, flapCardVisible) {
		return commit(SET_FLAPCARDVISIBLE, flapCardVisible)
	},
	setRecommendBooks({ commit }, recommendBooks) {
		return commit(SET_RECOMMENDBOOKS, recommendBooks)
	},
	setIsRandomBook({ commit }, isRandomBook) {
		return commit(SET_ISRANDOMBOOK, isRandomBook)
	},
	setBooks({ commit }, books) {
		return commit(SET_BOOKS, books)
	}
}

export default actions
