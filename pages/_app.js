import MyModal from '@/Components/MyModal';
import store from '@/Redux/Store/configureStore';
import '@/Services/FirebaseService';
import '@/styles/globals.css';
import '@/styles/styleBasic.scss';
import ReduxService from '@/Utils/ReduxService';
import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import Container from './Container/index';
export default function App( { Component, pageProps } ) {
  useEffect( () => {
    ReduxService.setBnbBalance()
  }, [] );
  useEffect( () => {
    const interval = setInterval( () => {

    },1000 )
    return ()=>{clearInterval( interval )}
  }, [] );
  return(
    <Provider store={store} >
      <Suspense fallback={null}>
        <Container >
          <Component {...pageProps} />
          {/* <MyModal /> */}
        </Container>
      </Suspense>
    </Provider>
  )
  // return <Component {...pageProps} />
}
