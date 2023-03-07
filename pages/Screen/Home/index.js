import ItemNFT from '@/Components/ItemNFT';
import useGetNFT from '@/Hook/useGetNFT';
import IPFSService from '@/Services/IPFSService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { ContainerHome, ContainerListNFTHome, ContentHome, ItemMenu, LeftHome, RightHome } from './styled';

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
let dataFake = []
for (let i = 0; i < 10; i++) {
  dataFake.push({
    time: '12/05/2000',
    hash: '0xa99ea7dfb13cce5a604bf61ef2de521de279f5fc18d75e172e040de70c46c3dd ',
    form: '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    to: '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    contract: '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
    data: {
      image: 'https://ipfs.pantograph.app/ipfs/QmaKHqMGLJVrTnopyLbE2cuvs4erCdvtTjzPWZE18PXxjj?filename=Guardian_AQUA.png',
      address: '0xbB47BDD15Aee646b66c03b8cCd1AD1C2AfE5d72c',
      nameUser: 'Ho Dien Cong',
      title: 'Basic blockchain',
    }
  })
}

const HomeScreen = () => {
  const router = useRouter()

  const [itemSelected, setItemSelected] = useState('qa_qc')
  const [listAllNFTs, setListAllNFTs] = useState([])
  const { listNFTAll, loading } = useGetNFT()
  const onClickItemMenu = (key) => {
    setItemSelected(key)
    switch (key) {
      case 'qa_qc':

        break;

      default:
        break;
    }
  }
  useEffect(() => {
    if (listNFTAll.length > 0) {
      setListAllNFTs([...listNFTAll, ...listNFTAll, ...listNFTAll])
    }
  }, [listNFTAll])
  console.log('====================================');
  console.log({ listAllNFTs });
  console.log('====================================');
  const loadFile = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = (form[0]).files;
    if (!files || files.length === 0) {
      return alert('No files selected');
    }
    const file = files[0];
    console.log({ file });
    const path = await IPFSService.uploadFile(file)
    console.log({ path })

  }
  const renderDesktop = () => {
    return (
      <ContentHome>
        <LeftHome >
          <ul></ul>
          {
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
          }
        </LeftHome>
        <RightHome >
          {/* <form onSubmit={loadFile}>
            <input type="file" name="file"/>
            <button type="submit">Upload file</button>
          </form> */}
          <ContainerListNFTHome>
            {
              listAllNFTs.length > 0 && listAllNFTs.map((item) => {
                return (
                  <ItemNFT key={item}
                    nft={item}
                    onClick={() => {
                      router.push(`/Screen/nft-detail/${item?.id}`)
                    }}
                  />
                )
              })
            }
          </ContainerListNFTHome>
        </RightHome>


      </ContentHome>
    )
  }
  const renderMobile = () => {
    return (<></>)
  }
  return (
    <ContainerHome>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHome>
  )
}

export default HomeScreen