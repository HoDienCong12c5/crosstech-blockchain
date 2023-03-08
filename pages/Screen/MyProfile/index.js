import ItemNFT from '@/Components/ItemNFT'
import { MediumText, NormalText } from '@/Components/TextSize'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import { Row } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ContainerInfor, ContainerMyProfile, RightMyProfile } from './styled'
const menuHome = [
  {
    key: 'qa_qc',
    title: 'QA / QC'
  },
  {
    key: 'basic_blockchain',
    title: 'Basic blockchain'
  },
  {
    key: 'basic_unity',
    title: 'Basic Unity'
  },

  {
    key: 'basic_c',
    title: 'Basic c'
  }

]
const MyProfile = () => {
  const router = useRouter()
  const { isSigned, userAddress } = useUserData()
  const [listNFTs, setListNFTs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await FirebaseService.storeCrossTech.getDataByAddress(userAddress)
      setListNFTs(data)
    }
    if (isSigned) {
      userAddress && getData()
    } else {
      router.push('/')
    }
  }, [isSigned, userAddress])

  const onClickItemMenu = (key) => {

  }
  return (
    <div className="container-basic">
      <ContainerInfor className='mb-20'>
        <MediumText>
          Ho Dien Cong
        </MediumText>
        <Row justify={'center'} style={{ gap: 5 }}>
          Address :
          <NormalText>
            {userAddress}
          </NormalText>
        </Row>
      </ContainerInfor>
      <ContainerMyProfile >
        <RightMyProfile>
          <div className="list-nft">
            {
              listNFTs.length > 0 && (
                listNFTs.map(nft => (
                  <ItemNFT
                    key={nft}
                    nft={nft}
                    onClick={() => {
                      router.push(`/Screen/nft-detail/${nft?.hash}`)
                    }}
                  />
                ))

              )
            }
          </div>
        </RightMyProfile>
      </ContainerMyProfile>
    </div>
  )
}

export default MyProfile
