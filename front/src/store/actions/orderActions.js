export function setOrder(order) {
    return (dispatch) => {
            const action = {
                type: 'SET_OEDER',
                order,
            }
            dispatch(action)
        
    }
}

export function getOrder(order) {
    return (dispatch) => {
    //         const action = {
    //             type: 'gET_OEDER',
    //             order,
    //         }
    //         dispatch(action)
        
    }
}