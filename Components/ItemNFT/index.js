import React from 'react'
import styles from './ItemNFT.module.scss'
import styled from 'styled-components';
import { MediumText, NormalText } from '../TextSize';
import { ellipsisAddress } from '@/Utils/function';
const ContainerItemNFT = styled.div`
    justify-content: center:
    align-items: center; 
    max-width: 300px;
    min-width: 200px;
    position: relative;
    background: transparent;
    align-self: stretch;
    display: flex;
    flex-flow: column wrap;
    cursor: pointer;
    box-sizing: border-box;
    border-image-slice: 1;
    border-radius: 16px;
`
const Img = styled.img`
    width: 100%;
`
const ItemNFT = ( {
  nft,
  onClick
} ) => {
  return (
    <ContainerItemNFT onClick={onClick}>
      <Img src={nft?.data?.image}/>
      <MediumText>
        {nft?.data.nameUser}
      </MediumText>
      <NormalText>
        {nft?.time}
      </NormalText>
      <NormalText>
        {ellipsisAddress( nft?.hash,5,4 )}
      </NormalText>
    </ContainerItemNFT>
  )
}

export default ItemNFT