import { useState } from 'react'
import { ItemMenu } from '../Home/styled'
import { ContainerMyProfile, LeftMyProfile, RightMyProfile } from './styled'
const menuHome = [
  {
    key:'qa_qc',
    title:'QA / QC'
  },
  {
    key:'basic_blockchain',
    title:'Basic blockchain'
  },
  {
    key:'basic_unity',
    title:'Basic Unity'
  },

  {
    key:'basic_c',
    title:'Basic c'
  }

]
const MyProfile = () => {
  const [itemSelected, setItemSelected] = useState('qa_qc')
  const onClickItemMenu = (key)=>{

  }
  return (
    <div className="container-basic">
      <ContainerMyProfile >
        <LeftMyProfile>
          {
            menuHome.map((item,index)=>{
              return (
                <ItemMenu
                  key={item}
                  nft={item}
                  onClick={()=>onClickItemMenu(item.key)}
                  className={'hover hover__zoom'}
                  selected={itemSelected === item.key}
                >
                  {item?.title}
                </ItemMenu>
              )
            })
          }
        </LeftMyProfile>
        <RightMyProfile>
          <div className="list-nft">list NFT</div>
        </RightMyProfile>
      </ContainerMyProfile>
    </div>
  )
}

export default MyProfile