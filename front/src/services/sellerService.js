// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
import axios from 'axios'


export const sellerService = {
    query,
    removeSeller,
    saveSeller,
    editSeller
}

const baseUrl = 'http://localhost:3030/sellers';

function query(filterBy = null) {
    // let url = '';
    // if (filterBy) {
    //     const { title, type, color } = filterBy
    //     console.log(type);
    //     url += '?';
    //     let params = new URLSearchParams(url.search);
    //     color && params.set('color', color);
    //     title && params.set('title_like', title);
    //     type !== 'all' && params.set('type', type);
    //     url += params.toString()   
    // }
         return axios.get(`${baseUrl}`)
            .then(res => {    
                return res.data
            })
            .catch(() => console.log('nooooo'))
}







async function removeSeller(sellerId) {
    const remove = await axios.delete(`${baseUrl}/${sellerId}`)
    return remove.data
    // return axios.delete(`${baseUrl}/${sellerId}`)
    // .then(res => res.data)
}
// function toggleSeller(seller) {
//     seller.isDone = !seller.isDone
//     return save(seller)
// }
function saveSeller(sellerToSave) {
    if (sellerToSave._id) {
        console.log('service');
        // UPDATE
        return axios.put(`${baseUrl}/${sellerToSave._id}`, sellerToSave)
            .then(res => res.data)
    } else {
        // CREATE
        return axios.post(baseUrl, sellerToSave)
            .then(res => res.data)
    }
}

function editSeller(seller) {
    console.log('hi');
    return axios.put(`${baseUrl}/${seller._id}`, seller)
        .then(res => res.data)
}