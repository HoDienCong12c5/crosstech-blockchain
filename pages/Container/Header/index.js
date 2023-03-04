import ButtonBasic from '@/Components/ButtonBasic'
import useCallBackReject from '@/Hook/useCallBackReject'
import useModal, { useWorkModal } from '@/Hook/useModal'
import useUserData from '@/Hook/useUserData'
import Metamask from '@/Modal/Metamask'
import { convertNumberToHex, ellipsisAddress } from '@/Utils/function'
import Web3Service from '@/Utils/web3'
import { Col, Row } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Media from 'react-media'
import styles from './Header.module.scss'
import { ContainerHeader } from './styled'
const Header = () => {
  const {callbackRejected} = useCallBackReject()
  const {showModal,hideModal} = useWorkModal()
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
  const minNFT = ()=>{
    showModal( {
      body: (
        <div >ok </div>
      ),
      modalConfig: {
        className: 'styles.modalBox'
      }
    } )
    // if( !isSigned ){
    //   connectMeta()
    // }else{

    // }
  }
  const renderDesktop = ()=>{
    return(
      <Row justify={'center'} align={'middle'}>
        <Col span={4} style={{textAlign:'start'}}>
          <Link href={'/'}>Logo</Link>
        </Col>
        <Col span={16}>
          <Row align={'middle'}>
            <ButtonBasic
              onClick={minNFT}
              className={styles['btn-item-menu']}
            >
              Mint NFT
            </ButtonBasic>
            {
              isSigned && (
                <>

                  <ButtonBasic
                    onClick={sendToken}
                    className={styles['btn-item-menu']}
                  >
                  My profile
                  </ButtonBasic>
                </>
              )
            }

          </Row>

        </Col>
        <Col span={4} style={{textAlign:'end'}}>
          {
            isSigned ? (
              <ButtonBasic
                onClick={handleMyProfile}
                className={styles['bnt-login']}
              >
                {ellipsisAddress( userAddress,5,4 )}
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
    <ContainerHeader>
      <Media query='(min-width: 768px)'>
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHeader>
  )
}

export default Header