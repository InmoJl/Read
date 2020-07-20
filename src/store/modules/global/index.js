import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state = {
	cacheComp: []
}

const global = {
	state,
	mutations,
	getters,
	actions
}

export default global
