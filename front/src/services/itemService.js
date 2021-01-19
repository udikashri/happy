// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
import axios from 'axios'


export const itemService = {
    query,
    removeItem,
    saveItem,
    editItem
}

// const baseUrl = 'http://localhost:3030/items'; // json
const baseUrl = 'http://localhost:3030/api/item'; // mongo

function query(filterBy = null) {
    console.log('query');
    let url = '';
 // json 20-29
    // if (filterBy) {
    //     const { title, type, color } = filterBy
    //     console.log(type);
    //     url += '?';
    //     let params = new URLSearchParams(url.search);
    //     color !== 'clear' && params.set('color', color);
    //     title && params.set('title_like', title);
    //     type !== 'all' && params.set('type', type);
    //     url += params.toString()   
    // }
        //  return axios.get(`${baseUrl}${url}`) /// json
         return axios.get(`${baseUrl}`) /// mongo
            .then(res => {
                return res.data
            })
            .catch(() => console.log('nooooo'))
}







async function removeItem(itemId) {
    const remove = await axios.delete(`${baseUrl}/${itemId}`)
    return remove.data
    // return axios.delete(`${baseUrl}/${itemId}`)
    // .then(res => res.data)
}
// function toggleItem(item) {
//     item.isDone = !item.isDone
//     return save(item)
// }
function saveItem(itemToSave) {
    if (itemToSave._id) {
        console.log('service');
        // UPDATE
        return axios.put(`${baseUrl}/${itemToSave._id}`, itemToSave)
            .then(res => res.data)
    } else {
        // CREATE
        return axios.post(baseUrl, itemToSave)
            .then(res => res.data)
    }
}

function editItem(item) {
    console.log('hi');
    return axios.put(`${baseUrl}/${item._id}`, item)
        .then(res => res.data)
}