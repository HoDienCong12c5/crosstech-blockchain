import React from 'react'
import Media from 'react-media'
import { BtnBuyNow, ContainerBanner, ContainerBannerMobileLP, ContainerIntroDuce, ContainerLogo, ContainerLP, DesBannerLP, DesContentIntroduce, IconIntroduce, ImgLogo, RowLPTop, TitleBannerLP, TitleContentIntroduce } from './styled'
import SEOLP from './Seo'
import Img, { images } from '@/common/images'
import { Col } from 'antd'
import styles from './LP.module.scss'
import BannerLP from './Components/Banner'
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
  )
}

export default LandingPage
