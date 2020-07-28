import {
	SET_LISTENVISIBLE
} from './mutation-types'

const actions = {
	setListenVisible({ commit }, visible) {
		return commit(SET_LISTENVISIBLE, visible)
	}
}

export default actions
