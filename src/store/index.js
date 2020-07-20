import Vuex from 'vuex'
import Vue 	from 'vue'

import book 		from './modules/book/index'
import store		from './modules/store/index'
import shelf		from './modules/shelf/index'
import global		from './modules/global/index'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		book,
		store,
		shelf,
		global
	}
})
