import { images } from '@/common/images'
import { Col, Row } from 'antd'
import React from 'react'
import Media from 'react-media'
import { BgOtherProduct, BtnBuyOtherProduct, ContainerOtherProduct, ImgOtherProduct, TileOtherProduct } from './styled'

const OtherProduct = () => {
  const renderDesktop = () => {
    return <Row>
      <Col className='col-basic gap-15' span={7}>
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15' span={7} offset={1}>
        <ImgOtherProduct src={images.landingPage.product2} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15' span={7} offset={1}>
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
    </Row>

  }
  const renderMobile = () => {
    return <div className='col-basic gap-40'>
      <Col className='col-basic gap-15 w-full'>
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15 w-full ' >
        <ImgOtherProduct src={images.landingPage.product2} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15 w-full ' >
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
    </div>

  }


  return (
    <ContainerOtherProduct >
      <BgOtherProduct />
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerOtherProduct>
  )
}

export default OtherProduct
