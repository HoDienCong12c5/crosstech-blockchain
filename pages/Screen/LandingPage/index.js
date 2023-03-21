import React from 'react'
import Media from 'react-media'
import { BtnBuyNow, ContainerBanner, ContainerBannerMobileLP, ContainerIntroDuce, ContainerLogo, ContainerLP, DesBannerLP, DesContentIntroduce, IconIntroduce, ImgLogo, RowLPTop, TitleBannerLP, TitleContentIntroduce } from './styled'
import SEOLP from './Seo'
import Img, { images } from '@/common/images'
import { Col } from 'antd'
import styles from './LP.module.scss'
import BannerLP from './Components/Banner'
import Head from 'next/head'
const LandingPage = () => {


  const renderContentIntroDuce = ()=>{
    return <></>
  }
  const renderDesktop = () => {
    return(
      <>
      </>
    )
  }

  const renderMobile = () => {
    return (
      <></>
    )
  }


  return (
    <>
      <Head >
        {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
          __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WRGMC62');`
        }}/>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript dangerouslySetInnerHTML={{
        __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRGMC62"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}/>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <ContainerLP className='container-basic'>
        <SEOLP />
        <BannerLP />

        <Media query='(min-width: 768px)'>
          {(match) => {
            if (match) {
              return renderDesktop()
            }
            return renderMobile()
          }}

        </Media>
      </ContainerLP>
    </>
  )
}

export default LandingPage
