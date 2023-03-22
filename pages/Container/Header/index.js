import { modalConfig, PAGE_SIGN } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import ModalTx from '@/Components/ModalTx'
import useCallBackReject from '@/Hook/useCallBackReject'
import { useWorkModal } from '@/Hook/useModal'
import useUserData from '@/Hook/useUserData'
import Metamask from '@/Modal/Metamask'
import { ellipsisAddress } from '@/Utils/function'
import ReduxService from '@/Utils/ReduxService'
import { DownOutlined } from '@ant-design/icons'
import { Col, Dropdown, Row, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Media from 'react-media'
import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { ContainerHeader } from './styled'
const Header = () => {
  const router = useRouter()
  const { isSigned, userAddress } = useUserData()
  const modal = useSelector(state => state.globalModal)
  const message = useSelector(state => state.locale.messages)
  useEffect(() => {
    ReduxService.checkReset()
  }, [])
  useEffect(() => {
    if(!isSigned){
      ReduxService.checkReset()
      if(PAGE_SIGN.includes(router.asPath)){
        ReduxService.resetUser()
      }
    }
  }, [router,isSigned])

  const connectMeta = async () => {
    Metamask.initialize()
  }
  const handleMyProfile = () => {
    router.push('/Screen/MyProfile')
  }
  const sendToken = () => {
    router.push('/Screen/MyProfile')
  }
  const minNFT = () => {
    if (isSigned) {
      router.push('/Screen/MintNFT')
    } else {
      connectMeta()
    }
  }
  const handleSignOut = async () => {
    ReduxService.resetUser()
  }

  const renderDesktop = () => {
    const items = [
      {
        key: '1',
        label: (
          <div onClick={handleSignOut}>
            {message.textPopular.logOut}
          </div>
        )
      }
    ]
    return (
      <Row justify={'center'} align={'middle'} style={{height:'100%'}}>
        <Col span={4} style={{ textAlign: 'start' }}>
          <Link href={'/'}>Logo</Link>
        </Col>
        <Col span={16}>
          <Row align={'middle'}>
            <ButtonBasic
              onClick={minNFT}
              className={styles['btn-item-menu']}
            >
              {message.mintNFT.mintNFT}
            </ButtonBasic>
            <ButtonBasic
              onClick={()=>router.push('/Screen/LandingPage','/landing-page')}
              className={styles['btn-item-menu']}
            >
              Landing page
            </ButtonBasic>
            {
              isSigned && (
                <ButtonBasic
                  onClick={sendToken}
                  className={styles['btn-item-menu']}
                >
                  {message.myProfile.myProfile}
                </ButtonBasic>
              )
            }

          </Row>

        </Col>
        <Col span={4} style={{ textAlign: 'end' }}>
          {
            isSigned ? (
              <Dropdown
                menu={{items,}}
                trigger={['click']}
                className={'hover'}
              >
                <ButtonBasic className={styles['bnt-login']} style={{ background: '#f5f5f5', borderRadius: 0, border: '1px solid; black' }}>
                  <Space>
                    {ellipsisAddress(userAddress, 5, 4)}
                    <DownOutlined />
                  </Space>
                </ButtonBasic>
              </Dropdown>
            ) : (
              <ButtonBasic
                style={{ background: '#f5f5f5', borderRadius: 0, border: '1px solid; black' }}
                onClick={connectMeta}
                className={styles['bnt-login']}
              >
                {message.common.login}
              </ButtonBasic>
            )
          }
        </Col>
      </Row>
    )
  }
  const renderMobile = () => {
    return (<></>)
  }
  return (
    <ContainerHeader>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHeader>
  )
}

export default Header
