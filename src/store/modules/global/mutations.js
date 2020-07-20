import {
	SET_CACHECOMP,
	POP_CACHECOMP
} from './mutation-types'

const mutations = {
	[SET_CACHECOMP](state, compName) {
		state.cacheComp.push(compName)
	},
	[POP_CACHECOMP](state) {
		state.cacheComp.pop()
	}
}

export default mutations
