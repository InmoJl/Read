import {
	SET_LISTENVISIBLE,
	SET_CATELOGVISIBLE
} from './mutation-types'


const mutations = {
	[SET_LISTENVISIBLE](state, visible) {
		state.listenVisible = visible
	},
	[SET_CATELOGVISIBLE](state, visible) {
		state.catelogVisible = visible
	}
}

export default mutations
