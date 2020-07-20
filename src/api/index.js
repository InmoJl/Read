import axios from 'axios'

export function home() {
	return axios({
		method: 'GET',
		url: `${process.env.VUE_APP_BASE_URL}/book/home`
	})
}

export function detail(book) {
	return axios({
		method: 'GET',
		url: `${process.env.VUE_APP_BOOK_URL}/book/detail`,
		params: {
			...book
		}
	})
}

export function list() {
	return axios({
		method: 'GET',
		url: `${process.env.VUE_APP_BASE_URL}/book/list`
	})
}

export function shelf() {
	return axios({
		method: 'GET',
		url: `${process.env.VUE_APP_BASE_URL}/book/shelf`
	})
}
