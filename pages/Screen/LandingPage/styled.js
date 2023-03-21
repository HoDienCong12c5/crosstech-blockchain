import Img from '@/Components/Image';
import ButtonBasic from '@/Components/ButtonBasic';
import { MediumText, NormalText } from '@/Components/TextSize';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const ContainerLP = styled.div``;
export const RowLPTop = styled(Row)`
  align-items: center;
  width: 100%;
`;
export const ContainerBanner = styled(Col)`
  display: flex;
  flex-flow: column;
  /* gap:10px; */
  gap: ${(props) => props.gap ?? 10}px;
  padding-right: 10px;
  text-align: ${(props) =>
    props.isLeft ? 'start' : props.isRight ? 'end' : 'center'};
`;
export const TitleBannerLP = styled.h1`
  line-height: 30px;
  font-size: 26px;
  white-space: wrap;
  text-transform: uppercase;
  max-width: 90%;
`;
export const DesBannerLP = styled(NormalText)``;
export const BtnBuyNow = styled(ButtonBasic)`
  border-radius: 16px;
  max-width: 120px;
`;
export const ContainerLogo = styled.div`
  width: 100%;
  height: max-content;
  margin: auto;
`;
export const ImgLogo = styled(Img)`
  width: 100% !important;
  height: auto !important;
  img {
    border-radius: 50% !important;
  }
  @media screen and (max-width: 768px) {
    width: 80% !important;
    margin: auto !important;
  }
`;
export const ContainerIntroDuce = styled(Row)`
  justify-content: center;
  text-align: start;
  white-space: break-spaces;
  overflow: hidden;
  gap: 5px;
  max-width: 90%;
`;
export const IconIntroduce = styled(Img)`
  height: 50px;
  width: 50px;
`;
export const TitleContentIntroduce = styled(MediumText)`
  font-weight: bold;
`;
export const DesContentIntroduce = styled(NormalText)``;
export const ContainerBannerMobileLP = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ContainerFooterLP = styled.div`
  display: flex;
  flex-flow: row;
  width: 90%;
  margin: auto;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;
export default () => {};
