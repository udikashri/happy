import { sellerService } from '../../services/sellerService'

export function loadSellers() {
    console.log('hi'); 
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