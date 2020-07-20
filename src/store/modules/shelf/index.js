import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
	shelfBooks: [],
	isEditStatus: false,
	countCompleteBooks: 0,
	bookMaxHeight: 0,
	selectBooks: []
}

const shelf ={
	state,
	mutations,
	actions,
	getters
}

export default shelf
