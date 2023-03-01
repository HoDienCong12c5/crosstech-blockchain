import '@/styles/globals.css'
import { Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@/Redux/Store/configureStore'
import ReduxService from '@/Utils/ReduxService';
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
        </Container>
      </Suspense>
    </Provider>
  )
  // return <Component {...pageProps} />
}
