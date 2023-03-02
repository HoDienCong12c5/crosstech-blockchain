import React from 'react'
import { ContainerHeader } from './styled'
import { Col, Row } from 'antd'
import ButtonBasic from '@/Components/ButtonBasic/index';
import styles from './Header.module.scss'
const Header = () => {
  return (
    <ContainerHeader>
      <Row justify={'space-between'}>
        <Col span={4} style={{alignContent:'start'}}>
          <fiv>logo</fiv>
        </Col>
        <Col span={16}>
          <fiv>logo</fiv>
        </Col>
        <Col span={4} style={{alignContent:'end'}}>
          <ButtonBasic style={styles['btn-login']} >
            Login
          </ButtonBasic>
        </Col>
      </Row>
    </ContainerHeader>
  )
}

export default Header