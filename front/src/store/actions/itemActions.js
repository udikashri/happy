import { itemService } from '../../services/itemService'


export function loadItems() { // Action Creator
    return async (dispatch) => {
        const items = await itemService.query()
                const action = {
                    type: 'SET_ITEMS',
                    items,
                    // filterBy
                }
                dispatch(action)
          
    }
}

export function saveItem(item){
    return (dispatch) => {
        return itemService.save(item)
            .then(saveItem => {
                const action = {
                    type: (item._id) ? 'SAVE_ITEM' : 'ADD_ITEM',
                    item: saveItem
                  }
                dispatch(action)
            })
    }
}

export function removeItem(itemId) {
    console.log('remove');
    return (dispatch) => {
        return itemService.removeItem(itemId)
        .then(items => {
            const action = {
                type: 'REMOVE_ITEM',
                itemId
            }
            dispatch(action)
        })
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        const action = {
            type: 'FILTER',
            filterBy
        }
        dispatch(action)
    }
}