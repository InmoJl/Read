import {
	SET_LISTENVISIBLE,
	SET_CATELOGVISIBLE
} from './mutation-types'

const actions = {
	setListenVisible({ commit }, visible) {
		return commit(SET_LISTENVISIBLE, visible)
	},
	setCatelogVisible({ commit }, visible) {
		return commit(SET_CATELOGVISIBLE, visible)
	}
}

export default actions
