import MyModal from '@/Components/MyModal';
import { Affix, Col, Layout, Row } from 'antd';
import Head from 'next/head';

import Header from './Header';
const { Content } = Layout
const Container = ({ children }) => {
  return (
    <Layout >
      <Head>
        <title>Cross - Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://bom.so/GCmxQp" />
      </Head>
      <Affix className='affix-header' style={{ zIndex: 100 }} offsetTop={0}>
        <Header />
      </Affix>

      <Content className='base-content' style={{ paddingTop: 30 }}>
        <Row type='flex' justify='center'>
          <Col span={24}>
            <div className='base-container'>{children}</div>
          </Col>
        </Row>
      </Content>
      <MyModal />

    </Layout>

  )
}

export default Container