// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
// import axios from 'axios'
import { httpService } from './httpService'


export const sellerService = {
    query,
    // removeSeller,
    // saveSeller,
    // editSeller
}

/// MONGO - Line = 14-22
// const baseUrl = 'http://localhost:3030/seller';

// function query() {
//          return axios.get(`${baseUrl}`)
//             .then(res => {    
//                 return res.data
//             })
//             .catch(() => console.log('nooooo'))
// }

/// JSON - Line = 25-33
// const baseUrl = 'http://localhost:3030/sellers';

// function query() {
//          return axios.get(`${baseUrl}`)
//             .then(res => {    
//                 return res.data
//             })
//             .catch(() => console.log('nooooo'))
// }

function query() {
    // return storageService.query('item')
    // console.log(httpService.get(`item`));
    return httpService.get(`seller`)
}





// async function removeSeller(sellerId) {
//     const remove = await axios.delete(`${baseUrl}/${sellerId}`)
//     return remove.data
//     // return axios.delete(`${baseUrl}/${sellerId}`)
//     // .then(res => res.data)
// }
// function toggleSeller(seller) {
//     seller.isDone = !seller.isDone
//     return save(seller)
// }
// function saveSeller(sellerToSave) {
//     if (sellerToSave._id) {
//         console.log('service');
//         // UPDATE
//         return axios.put(`${baseUrl}/${sellerToSave._id}`, sellerToSave)
//             .then(res => res.data)
//     } else {
//         // CREATE
//         return axios.post(baseUrl, sellerToSave)
//             .then(res => res.data)
//     }
// }

// function editSeller(seller) {
//     console.log('hi');
//     return axios.put(`${baseUrl}/${seller._id}`, seller)
//         .then(res => res.data)
// }