import React from 'react'
import Media from 'react-media'
import { ContainerBanner, ContainerLP, RowLPTop, TitleBannerLP } from './styled'
import SEOLP from './Seo'

const LandingPage = () => {
  const renderDesktop = () => {
    return(
      <RowLPTop>
        <ContainerBanner span={8} isLeft>
          <TitleBannerLP>
          MLem Coffee sắc hương tây nguyên
          </TitleBannerLP>

        </ContainerBanner>
        <ContainerBanner span={8}>
          MLem Coffee sắc hương tây nguyên
        </ContainerBanner>
        <ContainerBanner span={8} isRight>
          MLem Coffee sắc hương tây nguyên
        </ContainerBanner>
      </RowLPTop>
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
