import Storage from 'web-storage-cache'

const localStorage = new Storage()


export const setLocalStorage = (key, value) => localStorage.set(key, value)

export const getLocalStorage = key => localStorage.get(key)


export const removeLocalStorage = key => localStorage.delete(key)

export const clearLocalStorage = () => localStorage.clear()


export const setBookObject = (mainKey, key, value) => {
	let book = getLocalStorage(`${mainKey}`)
	
	if (!book) book = {}

	book[key] = value
	setLocalStorage(mainKey, book)
} 

export const getBookObject = key => {
	const book = getLocalStorage(`${key}`)
	return book ? book : null
}


export const getFontFamily = () => getLocalStorage('fontFamily')

export const setFontFamily = font => setLocalStorage('fontFamily', font)


export const getFontSize = () => getLocalStorage('fontSize')

export const setFontSize = fontSize => setLocalStorage('fontSize', fontSize)


export const getFontInfo = () => {
	return {
		fontSize: getFontSize(),
		fontFamily: getFontFamily()
	}
}

export const saveLocale = value => setLocalStorage('locale', value)

export const getLocale = () => getLocalStorage('locale')


export const saveLocation = (fileName, location) => setBookObject(fileName, 'location', location)

export const getLocation = fileName => {
	const bookObj = getBookObject(fileName)
	return bookObj ? bookObj['location'] : null
}


export const saveBookmark = (fileName, bookmark) => setBookObject(fileName, 'bookmark', bookmark)

export const getBookmark = fileName => {
	const bookObj = getBookObject(fileName)
	return bookObj ? bookObj['bookmark'] : null
}
