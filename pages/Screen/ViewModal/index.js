import ButtonBasic from '@/Components/ButtonBasic';
import { Row, Upload } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
const ContainerModal = styled.div`
    height: 600px;
    width: 500px;
    border-radius: 10;
    border: 1px solid #f6f2f2e7 !important;
`;

const ViewModal = () => {
  const [loadModal, setLoadModal] = useState( null )
  const [loadTexture, setLoadTexture] = useState( null )

  const loadFileModal = async ( file )=>{
    console.log( '====================================' );
    console.log( {file} );
    const reader = new FileReader()
    reader.readAsDataURL( file )
    console.log( '====================================' );
  }
  const renderButton = ()=>{
    return <>
      <Upload onChange={loadFileModal}>
        <ButtonBasic >Select File</ButtonBasic>
      </Upload>
    </>
  }
  return (
    <Row align={'middle'} justify={'center'}>
      <ContainerModal>
        {
          loadModal && loadTexture ? (
            <></>
          ) : renderButton()
        }
      </ContainerModal>
    </Row>
  )
}

export default ViewModal