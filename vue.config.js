
function mock(app, url, data) {
	app.get(url, (req, res) => res.json(data))
}

const homeData = require('./src/mock/bookHome.js')
const shelfData = require('./src/mock/bookShelf.js')
const listData = require('./src/mock/bookCategoryList.js')
const flatListData = require('./src/mock/bookFlatList.js')

module.exports = {
	// chainWebpack: config => {
	// 	config.resolve.alias
	// 		.set('@', resolve('src'))
	// 		.set('/components', resolve('@/components'))
	// 		.set('views', resolve('@/views'))
	// 		.set('router', resolve('@/router'))
	// 		.set('store', resolve('@/store'))
	// },
	devServer: {
		before(app) {
			mock(app, '/book/home', homeData)
			mock(app, '/book/shelf', shelfData)
			mock(app, '/book/list', listData)
			mock(app, '/book/flat-list', flatListData)
		}
	}
}

