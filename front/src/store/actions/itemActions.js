import { itemService } from '../../services/itemService'

export function loadItems(filterBy) { 
    return (dispatch) => {
        return itemService.query(filterBy)
            .then(items => {
                const action = {
                    type: 'SET_ITEMS',
                    items,
                }
                dispatch(action)
            })
    }
}

export function saveItem(item){
    return (dispatch) => {
        return itemService.saveItem(item)
            .then(saveItem => {
                const action = {
                    type: (item._id) ? 'SAVE_ITEM' : 'ADD_ITEM',
                    item: saveItem
                  }
                dispatch(action)
            })
    }
}

export function editItem(item) {
    console.log('hello');
    return (dispatch) => {
        itemService.editItem(item).then(() => { dispatch({ type: 'EDIT_ITEM', item }) })
    }
}

export function removeItem(itemId) {
    console.log('remove');
    return (dispatch) => {
        return itemService.removeItem(itemId)
        .then(items => {
            // console.log(items);
            const action = {
                type: 'REMOVE_ITEM',
                itemId
            }
            dispatch(action)
        })
    }
}

export function setFilter(filterBy) {
    console.log('filterBy is:',filterBy);
    return (dispatch) => {
        const action = {
            type: 'FILTER',
            filterBy
        }
        dispatch(action)
    }
}