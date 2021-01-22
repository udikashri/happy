const initialState = {
 order:{
     amount:0,
     title:''
 }

}

export function orderReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_OEDER':
      return { ...state, order:{...action.order}}

    default:
      return state
  }
}

