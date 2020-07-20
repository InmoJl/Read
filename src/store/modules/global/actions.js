import {
	SET_CACHECOMP,
	POP_CACHECOMP
} from './mutation-types'

const actions = {
	setCacheComp({ commit }, compName) {
		return commit(SET_CACHECOMP, compName)
	},
	popCacheComp({ commit }) {
		return commit(POP_CACHECOMP)
	}
}

export default actions
