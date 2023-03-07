import ItemNFT from '@/Components/ItemNFT'
import { MediumText, NormalText } from '@/Components/TextSize'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import { Row } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ContainerInfor, ContainerMyProfile, LeftMyProfile, RightMyProfile } from './styled'
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

  const [itemSelected, setItemSelected] = useState('qa_qc')
  const { idUser, isSigned } = useUserData()

  const [nftUser, setNFTUser] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await FirebaseService.storeCrossTech.getDataByID(idUser)
      setNFTUser(data)
    }
    if (isSigned) {
      idUser && getData()
    } else {
      router.push('/')
    }
  }, [idUser, isSigned])

  const onClickItemMenu = (key) => {

  }
  return (
    <div className="container-basic">
      <ContainerMyProfile >
        <LeftMyProfile>
          <ContainerInfor >
            <MediumText>
              Ho Dien Cong
            </MediumText>
            <Row>
              Address :
              <NormalText>
                0x......
              </NormalText>
            </Row>
          </ContainerInfor>
          {/* {
            menuHome.map((item, index) => {
              return (
                <ItemMenu
                  key={item}
                  nft={item}
                  onClick={() => onClickItemMenu(item.key)}
                  className={'hover hover__zoom'}
                  selected={itemSelected === item.key}
                >
                  {item?.title}
                </ItemMenu>
              )
            })
          } */}
        </LeftMyProfile>
        <RightMyProfile>
          <div className="list-nft">
            {
              nftUser && (
                <ItemNFT
                  nft={nftUser}
                  onClick={() => {
                    // router.push(`/Screen/nft-detail/${item?.id}`)
                  }}
                />
              )
            }
          </div>
        </RightMyProfile>
      </ContainerMyProfile>
    </div>
  )
}

export default MyProfile