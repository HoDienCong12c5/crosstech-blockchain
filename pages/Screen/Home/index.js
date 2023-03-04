import React, { useState } from 'react'
import { RightHome,ContainerHome, ContentHome, ItemMenu, LeftHome, ContainerListNFTHome } from './styled'
import Media from 'react-media'
import { Row, Upload } from 'antd'
import { create as ipfsHttpClient } from 'ipfs-http-client';
import ButtonBasic from '@/Components/ButtonBasic';
import IPFSService from '@/Services/IPFSService';
import useGetNFT from '@/Hook/useGetNFT';
import ItemNFT from '@/Components/ItemNFT';
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
const HomeScreen = () => {
  const [itemSelected, setItemSelected] = useState( 'qa_qc' )
  const {listNFTAll,loading} = useGetNFT()
  const onClickItemMenu = ( key )=>{
    setItemSelected( key )
    switch ( key ) {
    case 'qa_qc':

      break;

    default:
      break;
    }
  }

  const loadFile = async( event )=>{
    event.preventDefault();
    const form = event.target;
    const files = ( form[0] ).files;
    if ( !files || files.length === 0 ) {
      return alert( 'No files selected' );
    }
    const file = files[0];
    const path = await IPFSService.uploadFile( file )
    console.log( {path} )

  }
  const renderDesktop = ()=>{
    return (
      <ContentHome>
        <LeftHome >
          <ul></ul>
          {
            menuHome.map( ( item,index )=>{
              return (
                <ItemMenu
                  key={item}
                  onClick={()=>onClickItemMenu( item.key )}
                  className={'hover hover__zoom'}
                  selected={itemSelected === item.key}
                >
                  {item.title}
                </ItemMenu>
              )
            } )
          }
        </LeftHome>
        <RightHome >
          <form onSubmit={loadFile}>
            <input type="file" name="file"/>
            <button type="submit">Upload file</button>
          </form>
          <ContainerListNFTHome>
            {
              !loading && listNFTAll.map( ( item,index )=>{
                return (
                  <ItemNFT key={item}
                    nft={item}
                    onClick={()=>{alert( item?.hash )}}
                  />
                )
              } )
            }
          </ContainerListNFTHome>


        </RightHome>

      </ContentHome>
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

export default HomeScreen