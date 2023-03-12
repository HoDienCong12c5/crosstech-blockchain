import { modalConfig } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import ModalTx from '@/Components/ModalTx'
import useCallBackReject from '@/Hook/useCallBackReject'
import { useWorkModal } from '@/Hook/useModal'
import useUserData from '@/Hook/useUserData'
import Metamask from '@/Modal/Metamask'
import { ellipsisAddress } from '@/Utils/function'
import { Col, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Media from 'react-media'
import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { ContainerHeader } from './styled'
const Header = () => {
  const router = useRouter()
  const { callbackRejected } = useCallBackReject()
  const { showModal, hideModal } = useWorkModal()
  const { isSigned, userAddress } = useUserData()
  const modal = useSelector(state => state.globalModal)
  const message = useSelector(state => state.locale.messages)
  useEffect(() => {
    if (modal?.show && isSigned) {
      hideModal()
    }
  }, [modal, isSigned])
  const connectMeta = async () => {
    modalConfig.keyboard = false
    // modalConfig.closable = false
    modalConfig.maskClosable = false
    // showModal({
    //   body: (
    //     <ModalTx
    //       title={message.confirm}
    //       des={'Waiting for your confirm sign in'}
    //     />
    //   ),
    //   modalConfig: modalConfig
    // })
    Metamask.initialize()

  }
  const handleMyProfile = () => {
    router.push('/Screen/MyProfile')
  }
  const sendToken = () => {
    router.push('/Screen/MyProfile')
    // const toAddress = '0xf7E5bbF190206510a7ceA58b22354351A4E8E6dB'
    // const value = 0.0001
    // const callback = (callbackString) => {
    //   console.log('====================================');
    //   console.log({ callbackString });
    //   console.log('====================================');
    // }
    // Web3Service.sendToken(
    //   userAddress,
    //   toAddress,
    //   value,
    //   () => callback('callbackBeforeDone'),
    //   callback,
    //   callbackRejected
    // )
  }
  const minNFT = () => {
    if (isSigned) {
      router.push('/Screen/MintNFT')
    } else {
      connectMeta()
    }
  }
  const renderDesktop = () => {
    return (
      <Row justify={'center'} align={'middle'}>
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
            {
              isSigned && (
                <>

                  <ButtonBasic
                    onClick={sendToken}
                    className={styles['btn-item-menu']}
                  >
                    {message.myProfile.myProfile}
                  </ButtonBasic>
                </>
              )
            }

          </Row>

        </Col>
        <Col span={4} style={{ textAlign: 'end' }}>
          {
            isSigned ? (
              <ButtonBasic
                onClick={handleMyProfile}
                className={styles['bnt-login']}
              >
                {ellipsisAddress(userAddress, 5, 4)}
              </ButtonBasic>
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
