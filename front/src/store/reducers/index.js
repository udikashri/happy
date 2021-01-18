import { combineReducers } from 'redux'
import { reviewReducer } from './reviewReducer'
import { systemReducer } from './systemReducer'
import { userReducer } from './userReducer'
import { itemReducer } from './itemReducer'
import { sellerReducer } from './sellerReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  reviewModule: reviewReducer,
  userModule: userReducer,
  itemModule: itemReducer,
  sellerModule: sellerReducer
})
