import PageReduxAction from '@/Redux/Action/pageAction';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import storeRedux from '@/Redux/Store/configureStore';

const ReduxService = {
  callDispatchAction:( action )=>{
    storeRedux.dispatch( action )
  },
  setBnbBalance:( bnbBalance = 100 )=>{
    ReduxService.callDispatchAction( PageReduxAction.setBalance( bnbBalance ) )
  },
  setBnbPrice:( price )=>{
    ReduxService.callDispatchAction( PageReduxAction.setBnbPrice( price ) )
  },
  setMetamask:( metaMask )=>{
    ReduxService.callDispatchAction( PageReduxAction.setMetamask( metaMask ) )
  },
  setConnectionMethod:async ( method = KEY_PAGE.META_MASK )=>{
    ReduxService.callDispatchAction( PageReduxAction.setConnectionMethod( method ) )
  },
  getConnectionMethod:()=>{
    const { connectionMethod } = storeRedux.getState()
    return connectionMethod
  },
  openModal:( props, params )=>{
    ReduxService.callDispatchAction( PageReduxAction.setGlobalModal( { ...props, ...params, show:true } ) )
  },
  closeModal:()=>{
    ReduxService.callDispatchAction( PageReduxAction.setGlobalModal( { show: false } ) )
  },

}
export default ReduxService;