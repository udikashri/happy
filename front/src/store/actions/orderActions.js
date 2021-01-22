export function setOrder(order) {
    return (dispatch) => {
      console.log(444);
            const action = {
                type: 'SET_OEDER',
                order,
            }
            dispatch(action)
        
    }
}

export function getOrder(order) {
    return (dispatch) => {
      console.log(333);
    //         const action = {
    //             type: 'gET_OEDER',
    //             order,
    //         }
    //         dispatch(action)
        
    }
}