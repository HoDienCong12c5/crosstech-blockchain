import { URI_NFT, URL_NFT } from '@/common/constant';
import { convertDateFormat, detectImageUrl, ellipsisAddress, viewExternal } from '@/Utils/function';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MediumText, NormalText } from '../TextSize';
const ContainerItemNFT = styled.div`
    justify-content: center;
    align-items: center; 
    max-width: 300px;
    min-width: ${props => props.isMinWidth ? '200px' : 'auto'};
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
    width: 100%;

`
const ContainerImgNFT = styled.div`
     padding: 5px;
    width: 100%;
    margin: auto;
    text-align: center;
`
const HashNFT = styled(NormalText)`
  :hover{
    font-weight: bold;
    color:#2b5540;
  }
`
const ItemNFT = ({
  nft,
  onClick
}) => {
  const messages = useSelector(state => state.locale.messages)

  return (
    <ContainerItemNFT>
      <ContainerImgNFT onClick={onClick}>
        <Img src={detectImageUrl(nft?.data?.image)} />
      </ContainerImgNFT>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <MediumText textTransform>
          {nft?.data.nameStudent}
        </MediumText>
        <MediumText>
          {`${messages.textPopular.tokenId} : ${nft?.tokenId}`}
        </MediumText>
        <HashNFT onClick={() => viewExternal(`https://testnet.bscscan.com/tx/${nft?.hash}`)}>
          <a>
            {ellipsisAddress(nft?.hash, 8, 6)}

          </a>
        </HashNFT>
        <NormalText>
          {convertDateFormat(nft?.time)}
        </NormalText>

      </div>
    </ContainerItemNFT>
  )
}

export default ItemNFT
