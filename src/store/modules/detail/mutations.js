import {
	SET_LISTENVISIBLE
} from './mutation-types'


const mutations = {
	[SET_LISTENVISIBLE](state, visible) {
		state.listenVisible = visible
	}
}

export default mutations
