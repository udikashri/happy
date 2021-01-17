// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
import axios from 'axios'


export const itemService = {
    query,
    removeItem,
    saveItem,
    editItem
}

const baseUrl = 'http://localhost:3030/items';

// function query() {
    
//     console.log('sadsa');
//     return axios.get(baseUrl)
//         .then(res => res.data)
//         .then(items =>{return items})
// }

async function query(filterBy) {
    const res = await axios.get(baseUrl,{ params: filterBy })
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