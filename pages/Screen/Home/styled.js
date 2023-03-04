import ButtonBasic from '@/Components/ButtonBasic';
import { Row } from 'antd';
import styled from 'styled-components';

export const ContainerHome = styled.div`
    width: 100%;
    max-width: 1550px;
    justify-content: center;
    padding: 20 50px;
`;

export const ContentHome = styled( Row )`

`;
export const LeftHome = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 200px;
    padding: 0px 10px;
`;
export const RightHome = styled.div`
`;
export const ContainerListNFTHome = styled.div`

   display: grid;
  width:calc(100% - 80px );
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-gap:20px;
  margin-right: 130px;
  height: fit-content;
  @media screen and (max-width: 1350px) {
    width: calc(100% - 59px );
  grid-template-columns: 25% 25% 25% 25%;
  }
    @media screen and (max-width: 1120px) {
    width:calc(100% - 33px );
  grid-template-columns: 33% 33% 33%;
  }
   @media screen and (max-width: 899px) {
    width: calc(100% - 20px );
  grid-template-columns: 50% 50%;
  }
    @media screen and (max-width: 768px) {
    width: calc(100% - 24px );
  grid-template-columns: 33% 33% 33%;
    grid-gap: 16px;
      
    }
      @media screen and (max-width: 599px) {
    width: calc(100% - 16px );
  grid-template-columns: 50% 50%;
    grid-gap: 16px;
      
    }
  
`
export const ItemMenu = styled( ButtonBasic )`
   border: 0px;
   background-color: transparent; 
    border-color: transparent;
    box-shadow: 0px;
    text-align: start;
    font-weight: ${props=>props.selected ? 'bold' : 'normal'};
    &:hover{
        cursor: pointer,
    }
`;



export default () =>{};