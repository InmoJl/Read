const getters = {
	scrollY:							state => state.scrollY,
	searchPageVisible:		state => state.searchPageVisible,
	titleBarVisible:			state => state.titleBarVisible,
	flapCardVisible:			state => state.flapCardVisible,
	recommendBooks:				state => state.recommendBooks,
	isRandomBook:					state => state.isRandomBook,
	books:								state => state.books
}

export default getters
