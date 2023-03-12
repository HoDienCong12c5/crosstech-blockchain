import MyModal from '@/Components/MyModal';
import { Affix, Col, Layout, Row } from 'antd';
import Head from 'next/head';
import Header from './Header';
const { Content } = Layout
const Container = ({ children }) => {
  return (
    <Layout >
      <Head>
        <meta charSet="utf-8" />
        <title>Cross - Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://bom.so/GCmxQp" />
        <meta name="description" content="Eatnsmile"/>

        {/* <!-- Google / Search Engine Tags --/> */}
        <meta itemprop="name" content="Cross - Tech"/>
        <meta itemprop="description" content="Cross - Tech"/>
        <meta itemprop="image" content="https://bom.so/GCmxQp"/>

        {/* <!-- Facebook Meta Tags --/> */}
        <meta property="og:url" content="http://dev-star-token-client.w3w.app"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Cross - Tech"/>
        <meta property="og:description" content="Cross - Tech"/>
        <meta property="og:image" content="https://bom.so/GCmxQp"/>

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Cross - Tech"/>
        <meta name="twitter:description" content="Cross - Tech"/>
        <meta name="twitter:image" content="https://bom.so/GCmxQp" />

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
