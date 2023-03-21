import React from 'react'
import Media from 'react-media'
import { BtnBuyNow, ContainerBanner, ContainerBannerMobileLP, ContainerIntroDuce, ContainerLogo, ContainerLP, DesBannerLP, DesContentIntroduce, IconIntroduce, ImgLogo, RowLPTop, TitleBannerLP, TitleContentIntroduce } from './styled'
import SEOLP from './Seo'
import Img, { images } from '@/common/images'
import { Col } from 'antd'
import styles from './LP.module.scss'
const LandingPage = () => {


  const renderContentIntroDuce = ()=>{
    return <></>
  }
  const renderDesktop = () => {
    return(
      <RowLPTop>
        <ContainerBanner span={8} isLeft gap={30}>
          <TitleBannerLP>
            MLem Coffee sắc hương tây nguyên
          </TitleBannerLP>
          <DesBannerLP>
          MLem Coffee sắc hương tây nguyên
          </DesBannerLP>
          <BtnBuyNow>
            Buy Coffee
          </BtnBuyNow>
        </ContainerBanner>

        <ContainerBanner span={10}>
          <ContainerLogo>
            <ImgLogo
              className={styles['img-logo-banner']}
              fullSize
              src={images.landingPage.logo}
              alt={images.landingPage.logo}
            />
          </ContainerLogo>
        </ContainerBanner>

        <ContainerBanner span={6} isRight gap={30}>
          <ContainerIntroDuce>
            <IconIntroduce src={Img.home.iconElement} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Nguồn gốc
              </TitleContentIntroduce>
              <DesContentIntroduce>
                100% được trồng từ Tây Nguyên
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce >
            <IconIntroduce src={Img.home.iconOrigin} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Địa chỉ
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Thôn Thanh giáo, Huyện Đức Cơ, Tình Gia Lai
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce>
            <IconIntroduce src={Img.home.iconSmell} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Hương vị
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Đậm sắc tây nguyên, thơm ngon pha chút vị chua đặc trưng
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
        </ContainerBanner>
      </RowLPTop>
    )
  }

  const renderMobile = () => {
    return (
      <ContainerBannerMobileLP >
        <ContainerBanner gap={30}>
          <TitleBannerLP>
            MLem Coffee sắc hương tây nguyên
          </TitleBannerLP>
          <DesBannerLP>
          MLem Coffee sắc hương tây nguyên
          </DesBannerLP>
          <BtnBuyNow>
            Buy Coffee
          </BtnBuyNow>
        </ContainerBanner>

        <ContainerBanner style={{width:'100%'}} >
          <ContainerLogo>
            <ImgLogo
              className={styles['img-logo-banner']}
              fullSize
              src={images.landingPage.logo}
              alt={images.landingPage.logo}
            />
          </ContainerLogo>
        </ContainerBanner>

        <ContainerBanner isRight gap={30}>
          <ContainerIntroDuce>
            <IconIntroduce src={Img.home.iconElement} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Nguồn gốc
              </TitleContentIntroduce>
              <DesContentIntroduce>
                100% được trồng từ Tây Nguyên
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce >
            <IconIntroduce src={Img.home.iconOrigin} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Địa chỉ
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Thôn Thanh giáo, Huyện Đức Cơ, Tình Gia Lai
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce>
            <IconIntroduce src={Img.home.iconSmell} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Hương vị
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Đậm sắc tây nguyên, thơm ngon pha chút vị chua đặc trưng
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
        </ContainerBanner>
      </ContainerBannerMobileLP>
    )
  }


  return (
    <ContainerLP className='container-basic'>
      <SEOLP />
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
