// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'
const SCORE_FOR_REVIEW = 10

export const itemService = {
    login,
    logout,
    signup,
    getItems,
    getById,
    remove,
    update,
    getLoggedinItem,
    increaseScore
}

window.itemService = itemService
// Note: due to async, must run one by one...
// itemService.signup({fullname: 'Puki Norma', itemname: 'item1', password:'123',score: 100, isAdmin: false})
// itemService.signup({fullname: 'Master Adminov', itemname: 'admin', password:'123', score: 100, isAdmin: true})

function getItems() {
    // return storageService.query('item')
    return httpService.get(`item`)
}

function getById(itemId) {
    // return storageService.get('item', itemId)
    return httpService.get(`item/${itemId}`)
}
function remove(itemId) {
    // return storageService.remove('item', itemId)
    return httpService.delete(`item/${itemId}`)
}

async function update(item) {
    // return storageService.put('item', item)
    item = await httpService.put(`item/${item._id}`, item)
    // Handle case in which admin updates other item's details
    if (getLoggedinItem()._id === item._id) _saveLocalItem(item)
}

async function increaseScore(by = SCORE_FOR_REVIEW) {
    const item = getLoggedinItem()
    item.score = item.score + by || by
    await update(item)
    return item.score
}

async function login(itemCred) {
    // const items = await storageService.query('item')
    // const item = items.find(item => item.itemname === itemCred.itemname)
    // return _handleLogin(item)

    const item = await httpService.post('auth/login', itemCred)
    if (item) return _saveLocalItem(item)
}
async function signup(itemCred) {
    // const item = await storageService.post('item', itemCred)
    const item = await httpService.post('auth/signup', itemCred)
    return _saveLocalItem(item)
}
async function logout() {
    sessionStorage.clear()
    return await httpService.post('auth/logout')
}
function _saveLocalItem(item) {
    sessionStorage.setItem('loggedinItem', JSON.stringify(item))
    return item
}

function getLoggedinItem() {
    return JSON.parse(sessionStorage.getItem('loggedinItem'))
}

