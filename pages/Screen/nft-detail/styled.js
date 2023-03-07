import { Col, Row } from 'antd';
import styled from 'styled-components';
export const ContainerNFTDetail = styled(Row)`
   width: 100%;
    justify-content: center;
    align-items: center;
`;
export const LeftNFTDetail = styled(Col)`
    border-radius: 16px; 
    border: 1px solid black;
`;
export const LeftNFTContainerImg = styled.div`
   width: 90%;
   margin: auto;
   margin-top: 10px;
`;
export const RightNFTDetail = styled(LeftNFTDetail)`
    align-self: start;
    text-align: initial;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:5px;
`;

export default () => { };