// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
import axios from 'axios'


export const itemService = {
    query,
    removeItem
}

const baseUrl = 'http://localhost:3030/items';

// function query() {
    
//     console.log('sadsa');
//     return axios.get(baseUrl)
//         .then(res => res.data)
//         .then(items =>{return items})
// }

async function query() {
    const res = await axios.get(baseUrl)
    console.log(res);
    return res.data;
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
// function save(itemToSave) {
//     if (itemToSave._id) {
//         // UPDATE
//         return axios.put(`${baseUrl}/${itemToSave._id}`, itemToSave)
//             .then(res => res.data)
//     } else {
//         // CREATE
//         return axios.post(baseUrl, itemToSave)
//             .then(res => res.data)
//     }
// }
