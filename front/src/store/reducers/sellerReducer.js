const initialState = {
    // selectItem = {},
  sellers: [],

}

export function sellerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SELLERS':
      return { ...state, sellers: action.sellers}
    //   case 'SET_SELECT_ITEM':
    //       return {...state, selectItem: sellers.filter(seller => {return seller.id === action.sellerId})}
    case 'ADD_ITEM':
      return { ...state, sellers: [...state.sellers, action.seller] }
    case 'SAVE_ITEM':
      return {
        ...state, sellers: state.sellers.map(seller => {
          if (seller._id === action.seller._id) {
            return action.seller}
          else return seller
        })
      }
    case 'REMOVE_ITEM':
      return { ...state, sellers: state.sellers.filter(seller => seller._id !== action.sellerId) }
    case 'FILTER':
      const x = { ...state, filterBy: action.filterBy }
      console.log(x);
      return x
    default:
      return state
  }
}

