import { KEY_PAGE } from '../Lib/constants'
import initState from '../Lib/initState'
import createReducer from '../Lib/reducerConfig'

export const internetRedux = createReducer( initState.internet, {
  [KEY_PAGE.SET_INTERNET] ( state, action ) {
    return action.payload
  }
} )

export const metamaskRedux = createReducer( initState.metamaskRedux, {
  [KEY_PAGE.SET_METAMASK_INFO] ( state, action ) {
    return action.payload
  }
} )

export const balanceRedux = createReducer( initState.balanceRedux, {
  [KEY_PAGE.SET_BALANCE] ( state, action ) {
    return action.payload
  }
} )
export const connectionMethod = createReducer( initState.connectionMethod, {
  [KEY_PAGE.CONNECTION_METHOD] ( state, action ) {
    return action.payload
  }
} )

export const bnbPriceRedux = createReducer( initState.bnbPriceRedux, {
  [KEY_PAGE.SET_BNB_PRICE] ( state, action ) {
    return action.payload
  }
} )
export const globalModal = createReducer( initState.openModal, {
  [KEY_PAGE.MODAL_GLOBAL] ( state, action ) {
    return action.payload
  }
} )

