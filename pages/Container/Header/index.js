import ButtonBasic from '@/Components/ButtonBasic'
import useCallBackReject from '@/Hook/useCallBackReject'
import useModal from '@/Hook/useModal'
import useUserData from '@/Hook/useUserData'
import Metamask from '@/Modal/Metamask'
import { convertNumberToHex } from '@/Utils/function'
import Web3Service from '@/Utils/web3'
import { Col, Row } from 'antd'
import { useEffect } from 'react'
import Media from 'react-media'
import styles from './Header.module.scss'
import { ContainerHome } from './styled'
const Header = () => {
  const {callbackRejected} = useCallBackReject()
  const {showModal, hideModal} = useModal()
  useEffect( () => {
    const hexChianId = convertNumberToHex( 1313161555 )
    console.log( '====================================' );
    console.log( {hexChianId} );
    console.log( '====================================' );
  }, [] )
  const {isSigned, userAddress } = useUserData()
  const connectMeta = async ()=>{
    Metamask.initialize()
  }
  const handleMyProfile = ()=>{

  }
  const sendToken = ()=>{
    const toAddress = '0xf7E5bbF190206510a7ceA58b22354351A4E8E6dB'
    const value = 0.0001
    const callback = ( callbackString )=>{
      console.log( '====================================' );
      console.log( {callbackString} );
      console.log( '====================================' );
    }
    Web3Service.sendToken(
      userAddress,
      toAddress,
      value,
      ()=>callback( 'callbackBeforeDone' ),
      callback,
      callbackRejected
    )
  }
  const openModal = ()=>{
    // console.log( '====================================' );
    // console.log( 'openModal' );
    // console.log( '====================================' );
    // showModal( {
    //   body:<div>ok</div>,
    //   modalConfig: {
    //     width: 390,
    //     maskClosable: false,
    //     closable: true
    //   }
    // } )
  }
  const renderDesktop = ()=>{
    return(
      <Row justify={'space-between'} align={'middle'}>
        <Col span={4} style={{textAlign:'start'}}>
          <div>Logo</div>
        </Col>
        <Col span={26}>
          <div>Logo</div>
          <ButtonBasic
            onClick={sendToken}
            className={styles['bnt-login']}
          >
              Send example token
          </ButtonBasic>
          <ButtonBasic
            onClick={openModal}
            className={styles['bnt-login']}
          >
             openModal
          </ButtonBasic>
        </Col>
        <Col span={4} style={{textAlign:'end'}}>
          {
            isSigned ? (
              <ButtonBasic
                onClick={handleMyProfile}
                className={styles['bnt-login']}
              >
                {userAddress}
              </ButtonBasic>
            ) : (
              <ButtonBasic
                onClick={connectMeta}
                className={styles['bnt-login']}
              >
              Login
              </ButtonBasic>
            )
          }
        </Col>
      </Row>
    )
  }
  const renderMobile = ()=>{
    return( <></> )
  }
  return (
    <ContainerHome>
      <Media query='(min-width: 768px)'>
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHome>
  )
}

export default Header