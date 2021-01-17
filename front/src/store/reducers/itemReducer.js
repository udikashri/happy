// import { itemService } from '../../services/itemService.js'

const initialState = {
    // selectItem = {},
  items: [],
  // filterBy: {title: '', type: '', lowPrice: 1, highPrice: 1000}
  filterBy:{q:''}
}

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.items}
    //   case 'SET_SELECT_ITEM':
    //       return {...state, selectItem: items.filter(item => {return item.id === action.itemId})}
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] }
    case 'SAVE_ITEM':
      return {
        ...state, items: state.items.map(item => {
          if (item._id === action.item._id) {
            return action.item}
          else return item
        })
      }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item._id !== action.itemId) }
    case 'FILTER':
      const x = { ...state, filterBy: action.filterBy }
      console.log(x);
      return x
    default:
      console.log('default');
      return state
  }
}

