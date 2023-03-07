import ImageLazy from '@/Components/ImageLazy';
import { MediumText, TitleText } from '@/Components/TextSize';
import FirebaseService from '@/Services/FirebaseService';
import { convertDateFormat } from '@/Utils/function';
import { useEffect, useState } from 'react';
import { ContainerNFTDetail, LeftNFTContainerImg, LeftNFTDetail, RightNFTDetail } from './styled';

const NFTDetail = ({ id }) => {
  const [nftDetail, setNftDetail] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await FirebaseService.storeCrossTech.getDataByID(id)
      data && setNftDetail(data)

    }
    getData()

  }, [])
  console.log('====================================');
  console.log({ nftDetail });
  console.log('====================================');
  return (
    <div className='container-basic'>
      <ContainerNFTDetail >
        {
          nftDetail ? (
            <>
              <LeftNFTDetail span={10} >
                <LeftNFTContainerImg>
                  <ImageLazy
                    src={nftDetail.data.image}
                    alt={nftDetail.data.image}
                    width={'90%'}
                  />
                </LeftNFTContainerImg>
              </LeftNFTDetail>
              <RightNFTDetail span={13} offset={1}>
                <TitleText className='mb-10'>
                  {nftDetail.data?.nameUser}
                </TitleText>
                <MediumText className='mb-5'>
                  {`Kho hoc: ${nftDetail.title}`}
                </MediumText>
                <MediumText>
                  {`Contract: ${nftDetail.data.address}`}
                </MediumText>
                <MediumText>
                  {`Hash Tx: ${nftDetail.hash}`}
                </MediumText>
                <MediumText>
                  {` Time: ${convertDateFormat(nftDetail.time)}`}
                </MediumText>
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
  const { id } = query
  return { id }
}
export default NFTDetail