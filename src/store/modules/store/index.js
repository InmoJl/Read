import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
	scrollY: 0,
	searchPageVisible: false,
	titleBarVisible: true,
	flapCardVisible: false,
	recommendBooks: null,
	isRandomBook: false,
	books: null
}

const store = {
	state,
	mutations,
	actions,
	getters
}

export default store
