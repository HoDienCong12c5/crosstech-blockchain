import ImageLazy from '@/Components/ImageLazy';
import { TitleText } from '@/Components/TextSize';
import FirebaseService from '@/Services/FirebaseService';
import { convertDateFormat, detectImageUrl, viewExternal } from '@/Utils/function';
import { Row } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ContainerNFTDetail, LeftNFTContainerImg, LeftNFTDetail, RightNFTDetail, TextMedium } from './styled';

const NFTDetail = ({ hash }) => {
  const [nftDetail, setNftDetail] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await FirebaseService.storeCrossTech.getDataByHash(hash)
      data?.length > 0 && setNftDetail(data[0])

    }
    getData()

  }, [])

  const renderContent = (title, content, onClick = null, isHover = true) => {
    return (
      <Row style={{ gap: 5, flexFlow: 'row nowrap' }} >
        <TextMedium style={{ whiteSpace: 'nowrap' }}>
          {title}
        </TextMedium>
        <TextMedium
          isContent
          onClick={() => onClick ? onClick() : null}
          className={classNames(
            { 'hover hover__text-decoration': isHover }
          )}
        >
          {content}
        </TextMedium>
      </Row>
    )
  }
  return (
    <div className='container-basic'>
      <ContainerNFTDetail >
        {
          nftDetail ? (
            <>
              <LeftNFTDetail span={10} >
                <LeftNFTContainerImg>
                  <ImageLazy
                    src={detectImageUrl(nftDetail.data.image)}
                    alt={detectImageUrl(nftDetail.data.image)}
                    width={'90%'}
                  />
                </LeftNFTContainerImg>
              </LeftNFTDetail>
              <RightNFTDetail span={13} offset={1}>
                <TitleText className='mb-10'>
                  {nftDetail.data?.nameUser}
                </TitleText>
                {
                  renderContent(
                    'Khoa hoc :',
                    nftDetail.title,
                    null,
                    false
                  )
                }
                {
                  renderContent(
                    'Token ID:',
                    nftDetail.tokenId
                  )
                }
                {
                  renderContent(
                    'Name student:',
                    nftDetail.data.nameStudent
                  )
                }
                {
                  renderContent(
                    'Address student:',
                    nftDetail.to
                  )
                }
                {
                  renderContent(
                    'Hash Tx:',
                    nftDetail.hash,
                    () => viewExternal(`https://testnet.bscscan.com/tx/${nftDetail.hash}`)
                  )
                }
                {
                  renderContent(
                    'Time:',
                    convertDateFormat(nftDetail.time),
                    null,
                    false
                  )
                }

              </RightNFTDetail>
            </>
          ) : (
            <></>
          )
        }

      </ContainerNFTDetail>
    </div>
  )
}
NFTDetail.getInitialProps = ({ query }) => {
  const { hash } = query
  return { hash }
}
export default NFTDetail
