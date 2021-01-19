// import { storageService } from './asyncStorageService'
import { httpService } from './httpService'
// const SCORE_FOR_REVIEW = 10

export const itemService = {

    query,
    removeItem,
    saveItem,

}

window.itemService = itemService
// Note: due to async, must run one by one...
// itemService.signup({fullname: 'Puki Norma', itemname: 'item1', password:'123',score: 100, isAdmin: false})
// itemService.signup({fullname: 'Master Adminov', itemname: 'admin', password:'123', score: 100, isAdmin: true})

// function query() {
//     // return storageService.query('item')
//     // console.log(httpService.get(`item`));
//     return httpService.get(`item`)
// }

function query(filterBy = null) {
    let url = '';
    if (filterBy) {
        const { title, type, color } = filterBy
        console.log(type);
        url += '?';
        let params = new URLSearchParams(url.search);
        color !== 'clear' && params.set('color', color);
        title && params.set('title', title);
        type !== 'all' && params.set('type', type);
        url += params.toString()
    }
    console.log('url' ,url)
    return httpService.get(`item${url}`)

}

// function getById(itemId) {
//     // return storageService.get('item', itemId)
//     return httpService.get(`item/${itemId}`)
// }
function removeItem(itemId) {
    // return storageService.remove('item', itemId)
    console.log('itemID', itemId);
    return httpService.delete(`item/${itemId}`)
}

async function saveItem(item) {
    console.log('item is:', item);
    //     // return storageService.put('item', item)
    if (!item._id) {
        return await httpService.post(`item/`, item)
    } else return await httpService.put(`item/${item._id}`, item)

    //     // Handle case in which admin updates other item's details
    //     if (getLoggedinItem()._id === item._id) _saveLocalItem(item)
}


// async function login(itemCred) {
//     // const items = await storageService.query('item')
//     // const item = items.find(item => item.itemname === itemCred.itemname)
//     // return _handleLogin(item)

//     const item = await httpService.post('auth/login', itemCred)
//     if (item) return _saveLocalItem(item)
// }
// async function signup(itemCred) {
//     // const item = await storageService.post('item', itemCred)
//     const item = await httpService.post('auth/signup', itemCred)
//     return _saveLocalItem(item)
// }
// async function logout() {
//     sessionStorage.clear()
//     return await httpService.post('auth/logout')
// }
// function _saveLocalItem(item) {
//     sessionStorage.setItem('loggedinItem', JSON.stringify(item))
//     return item
// }

// function getLoggedinItem() {
//     return JSON.parse(sessionStorage.getItem('loggedinItem'))
// }

