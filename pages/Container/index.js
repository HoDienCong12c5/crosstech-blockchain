import { Affix, Col, Layout, Row } from 'antd'
import React from 'react'
import Header from './Header'
const { Content } = Layout
const Container = ( {children} ) => {
  return (
    <Layout >
      <Affix className='affix-header' style={{ zIndex: 100 }}offsetTop={0}>
        <Header />
      </Affix>

      <Content className='base-content'>
        <Row type='flex' justify='center'>
          <Col span={24}>
            <div className='base-container'>{children}</div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Container