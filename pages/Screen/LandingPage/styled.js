import { Col, Row } from 'antd';
import styled from 'styled-components';
export const ContainerLP = styled.div`
  
`;
export const RowLPTop = styled(Row)`
  /* gap:10px; */
  width:100%;
  
`
export const ContainerBanner = styled(Col)`
  display:flex ;
  flex-flow: column;
  gap:10px;
  padding-right:10px;
  text-align:${props=>props.isLeft ? 'start' : props.isRight ? 'end' : 'center'};
`
export const TitleBannerLP = styled.h1`
  line-height: 30px;
  font-size:26px ;
  white-space:wrap;
  text-transform:uppercase;
  letter-spacing: 0.05em;

`
export const DesBannerLP = styled.h2`
  font-size:16px ; 
`
export default ()=>{};
