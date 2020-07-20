import Vue from 'vue'
import VueRouter from 'vue-router';

const Ebook = () => import('../views/Ebook')
const EbookView = () => import('../components/Ebook')
const Store = () => import('../views/Store')
const Detail = () => import('../views/Detail')
const BookList = () => import('../views/BookList')
const Shelf = () => import('../views/Shelf')
const Bookshelf = () => import('../views/Shelf/Bookshelf')
const BookshelfCategory = () => import('../views/Shelf/BookshelfCategory')

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/bookshelf'
	},
	{
		path: '/bookshelf',
		name: 'Shelf',
		component: Shelf,
		meta: {
			index: 1,
			keepAlive: false
		},
		children: [{
			path: '/',
			name: 'Bookshelf',
			component: Bookshelf,
			meta: {
				index: 1
			}
		}, {
			path: 'category',
			name: 'BookshelfCategory',
			component: BookshelfCategory,
			meta: {
				index: 2
			}
		}],
	},
	{
		path: '/store',
		name: 'Store',
		component: Store,
		meta: {
			index: 2,
			keepAlive: false
		}
	},
	{
		path: '/detail',
		name: 'Detail',
		component: Detail,
		meta: {
			index: 3,
			keepAlive: false
		}
	},
	{
		path: '/ebook/:fileName',
		name: 'Ebook',
		component: Ebook,
		children: [{
			path: 'fileName',
			component: EbookView
		}],
		meta: {
			index: 4,
			keepAlive: false
		}
	},
	{
		path: '/list',
		name: 'BookList',
		component: BookList,
		meta: {
			index: 5,
			keepAlive: false
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
