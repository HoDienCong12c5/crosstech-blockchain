import PageReduxAction from '@/Redux/Action/pageAction';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import initState from '@/Redux/Lib/initState';
import { checkLocalStoreToRedux } from '@/Redux/Reducers';
import store from '@/Redux/Store/configureStore';
import '@/styles/globals.css';
import '@/styles/helper.scss';
import '@/styles/styleBasic.scss';
import ReduxService from '@/Utils/ReduxService';
import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import Container from './Container/index';
import ReduxConnectIntl from '@/static/asset/lang'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    ReduxService.setBnbBalance()
  }, []);
  useEffect(() => {
    const getDataLocal = async () => {
      const storageRedux = [
        { key: KEY_PAGE.SET_METAMASK_INFO, action: PageReduxAction.setMetamask, init: initState.metamaskRedux },
        { key: KEY_PAGE.CONNECTION_METHOD, action: PageReduxAction.setConnectionMethod, init: initState.connectionMethod },
      ]
      const promiseArr = storageRedux.map((item) => {
        checkLocalStoreToRedux(store, item.key, item.action, item.init)
      })
      await Promise.all(promiseArr)
    }
    getDataLocal()
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {

    }, 1000)
    return () => { clearInterval(interval) }
  }, []);
  return (
    <Provider store={store} >
      <Suspense fallback={null}>
        <ReduxConnectIntl>
          <Container >
            <Component {...pageProps} />
          </Container>
        </ReduxConnectIntl>

      </Suspense>
    </Provider>
  )
  // return <Component {...pageProps} />
}
