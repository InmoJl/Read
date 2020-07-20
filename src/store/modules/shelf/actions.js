import {
	SET_SHELFBOOKS,
	PUSH_BOOK,
	PUSH_BOOK_OF_CATE,
	DEL_BOOK,
	DEL_BOOK_OF_CATE,
	REMOVE_BOOK,
	REMOVE_BOOK_OF_INDEX,
	REMOVE_BOOK_OF_CATE,
	SET_ISEDITSTATUS,
	SET_COUNTCOMPLETEBOOKS,
	SET_BOOKMAXHEIGHT,
	PUSH_SELECTBOOKS,
	REMOVE_SELECTBOOK,
	CLEAR_SHELETBOOKS
} from './mutation-type'

const actions = {
	setShelfBooks({ commit }, shelfBooks) {
		return commit(SET_SHELFBOOKS, shelfBooks)
	},
	pushBook({ commit }, shelfBook) {
		return commit(PUSH_BOOK, shelfBook)
	},
	pushBookOfCate({ commit }, indexOfShelfbook, book) {
		return commit(PUSH_BOOK_OF_CATE, indexOfShelfbook, book)
	},
	delBook({ commit }) {
		return commit(DEL_BOOK)
	},
	delBookOfCate({ commit }, indexOfCate) {
		return commit(DEL_BOOK_OF_CATE, indexOfCate)
	},
	removeBook({ commit }, fileName) {
		return commit(REMOVE_BOOK, fileName)
	},
	removeBookOfIndex({ commit }, index) {
		return commit(REMOVE_BOOK_OF_INDEX, index)
	},
	removeBookOfCate({ commit }, value) {
		return commit(REMOVE_BOOK_OF_CATE, value)
	},
	setIsEditStatus({ commit }, isEditStatus) {
		return commit(SET_ISEDITSTATUS, isEditStatus)
	},
	setCountCompleteBooks({ commit }, count) {
		return commit(SET_COUNTCOMPLETEBOOKS, count)
	},
	setBookMaxHeight({ commit }, bookMaxHeight) {
		return commit(SET_BOOKMAXHEIGHT, bookMaxHeight)
	},
	pushSelectBooks({ commit }, index) {
		return commit(PUSH_SELECTBOOKS, index)
	},
	removeSelectBook({ commit }, index) {
		return commit(REMOVE_SELECTBOOK, index)
	},
	clearSelectBooks({ commit }) {
		return commit(CLEAR_SHELETBOOKS)
	}
}

export default actions
