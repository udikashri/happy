// import { storageService } from './storageService.js';
// import { utilService } from './utilService.js';
// import axios from 'axios'
import { httpService } from './httpService'


export const sellerService = {
    query
  
}

function query() {
    // return storageService.query('item')
    // console.log(httpService.get(`item`));
    return httpService.get(`seller`)
}

