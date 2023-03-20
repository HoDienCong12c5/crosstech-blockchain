import ItemNFT from '@/Components/ItemNFT';
import useGetNFT from '@/Hook/useGetNFT';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import Loading from '@/Components/Loading'
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
      setListAllNFTs(listNFTAll)
    }
  }, [listNFTAll])
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
          <ContainerListNFTHome>
            {
              listAllNFTs.length > 0 ? (
                listAllNFTs.map((item) => {
                  return (
                    <ItemNFT key={item}
                      nft={item}
                      onClick={() => {
                        router.push(`/Screen/nft-detail/${item?.hash}`)
                      }}
                    />
                  )
                })
              ) : (
                <Loading />
              )
            }
          </ContainerListNFTHome>
        </RightHome>
      </ContentHome>
    )
  }
  const renderMobile = () => {
    return (
      <ContainerListNFTHome>
        {
          listAllNFTs.length > 0 ? (
            listAllNFTs.map((item) => {
              return (
                <ItemNFT key={item}
                  nft={item}
                  onClick={() => {
                    router.push(`/Screen/nft-detail/${item?.hash}`)
                  }}
                />
              )
            })
          ) : (
            <Loading />
          )
        }
      </ContainerListNFTHome>
    )
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
