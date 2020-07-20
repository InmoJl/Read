import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'
import i18n from './lang'
import App from './App'

import './utils/directive'
import './utils/create-api'

Vue.use(VueLazyLoad)

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
