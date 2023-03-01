import PageReduxAction from '@/Redux/Action/pageAction';
import storeRedux from '@/Redux/Store/configureStore'

const ReduxService={
  callDispatchAction:( action )=>{
    storeRedux.dispatch( action )
  },
  setBnbBalance:( bnbBalance =100 )=>{
    ReduxService.callDispatchAction( PageReduxAction.setBalance( bnbBalance ) )
  },
  setBnbPrice:( price )=>{
    ReduxService.callDispatchAction( PageReduxAction.setBnbPrice( price ) )
  },
  setMetamask:( metaMask )=>{
    ReduxService.callDispatchAction( PageReduxAction.setMetamask( metaMask ) )
  }

}
export default ReduxService;