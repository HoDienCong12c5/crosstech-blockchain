import React from 'react'
import styled from 'styled-components';
import { MediumText, NormalText, TitleText } from '../TextSize';
import ButtonBasic from '../ButtonBasic';
const ContainerModalTx = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-content: center;
align-content: center;
text-align: center;
`;

const ModalTx = ( {
  title,
  des,
  onSubmit = null,
  titleBtn = 'OK'
} ) => {
  return (
    <ContainerModalTx>
      <MediumText textTransform className='mb-10' fontWeight='bold'>
        {title}
      </MediumText>
      <NormalText>
        {des}
      </NormalText>
      {
        onSubmit && (
          <ButtonBasic onClick={onSubmit}>
            {titleBtn}
          </ButtonBasic>
        )
      }
    </ContainerModalTx>
  )
}

export default ModalTx