import { sellerService } from '../../services/sellerService'

export function loadSellers() { 
    return (dispatch) => {
        return sellerService.query()
            .then(sellers => {
                const action = {
                    type: 'SET_SELLERS',
                    sellers,
                }
                dispatch(action)
            })
    }
}