import React from 'react'
import styles from './ItemNFT.module.scss'
import styled from 'styled-components';
import { MediumText, NormalText } from '../TextSize';
import { ellipsisAddress } from '@/Utils/function';
const ContainerItemNFT = styled.div`
    justify-content: center:
    align-items: center; 
    max-width: 300px;
    min-width: ${props=>props.isMinWidth ? '200px' : 'auto'};
    position: relative;
    background: transparent;
    align-self: stretch;
    display: flex;
    flex-flow: column wrap;
    cursor: pointer;
    box-sizing: border-box;
    border-image-slice: 1;
    border-radius: 16px;
    border: 1px solid #2b5540;
    padding: 5px 15px;
`
const Img = styled.img`
    height: 100%;
    width: fit-content;
    max-height: 180px;

`
const ContainerImgNFT = styled.div`
        padding: 5px;
    width: 100%;
    margin: auto;
`
const ItemNFT = ( {
  nft,
  onClick
} ) => {
  console.log( {nft} );
  return (
    <ContainerItemNFT onClick={onClick}>
      <ContainerImgNFT>
        <Img src={nft?.data?.image}/>
      </ContainerImgNFT>

      <div>
        <MediumText>
          {nft?.data.nameUser}
        </MediumText>
        <NormalText>
          {nft?.time}
        </NormalText>
        <NormalText>
          {ellipsisAddress( nft?.hash,8,6 )}
        </NormalText>
      </div>
    </ContainerItemNFT>
  )
}

export default ItemNFT