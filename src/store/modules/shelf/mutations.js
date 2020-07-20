import { 
	SET_SHELFBOOKS,
	PUSH_BOOK,
	PUSH_BOOK_OF_CATE,
	DEL_BOOK,
	DEL_BOOK_OF_CATE,
	REMOVE_BOOK,
	REMOVE_BOOK_OF_INDEX,
	REMOVE_BOOK_OF_CATE,
	MOVE_BOOK_FROM_CATE,
	SET_ISEDITSTATUS,
	SET_COUNTCOMPLETEBOOKS,
	SET_BOOKMAXHEIGHT,
	PUSH_SELECTBOOKS,
	REMOVE_SELECTBOOK,
	CLEAR_SHELETBOOKS
} from './mutation-type'

const mutations = {
	[SET_SHELFBOOKS](state, shelfBooks) {
		state.shelfBooks = shelfBooks
	},
	[PUSH_BOOK](state, shelfBook) {
		state.shelfBooks.push(shelfBook)
	},
	[PUSH_BOOK_OF_CATE](state, indexOfShelfbook, book) {
		state.shelfBooks[indexOfShelfbook].books.push(book)
	},
	[DEL_BOOK](state) {
		let index = -1
		while((index = state.selectBooks.pop()) !== undefined)
			state.shelfBooks.splice(index, 1)
	},
	[DEL_BOOK_OF_CATE](state, indexOfCate) {
		const books = state.shelfBooks[indexOfCate].books
		
		let index = -1
		while ((index = state.selectBooks.pop()) !== undefined) books.splice(index, 1)
	},
	[REMOVE_BOOK_OF_INDEX](state, index) {
		state.shelfBooks.splice(index, 1)
	},
	[REMOVE_BOOK](state, fileName) {
		const index = state.shelfBooks.findIndex(book => {
			return (!book.cateName && book.fileName === fileName) ? true : false
		})
		state.shelfBooks.splice(index, 1)
	},
	[REMOVE_BOOK_OF_CATE](state, {indexOfShelfbook, bookId}) {
		const cateBooks = state.shelfBooks[indexOfShelfbook].books
		const index = cateBooks.findIndex(book => book.bookId === bookId)
		if (index >= 0) cateBooks.splice(index, 1)
	},
	[SET_ISEDITSTATUS](state, isEditStatus) {
		state.isEditStatus = isEditStatus
	},
	[SET_COUNTCOMPLETEBOOKS](state, count) {
		state.countCompleteBooks += count
	},
	[SET_BOOKMAXHEIGHT](state, bookMaxHeight) {
		state.bookMaxHeight = bookMaxHeight
	},
	[PUSH_SELECTBOOKS](state, index) {
		state.selectBooks.push(index)
	},
	[REMOVE_SELECTBOOK](state, index) {
		state.selectBooks.splice(state.selectBooks.indexOf(index), 1)
	},
	[CLEAR_SHELETBOOKS](state, index) {
		state.selectBooks = []
	}
}

export default mutations
