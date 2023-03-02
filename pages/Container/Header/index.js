import ButtonBasic from '@/Components/ButtonBasic'
import { Col, Row } from 'antd'
import Media from 'react-media'
import styles from './Header.module.scss'
import { ContainerHome } from './styled'
import Metamask from '@/Modal/Metamask'
const Header = () => {
  const connectMeta = ()=>{
    Metamask.connect()
  }
  const renderDesktop = ()=>{
    return(
      <Row justify={'space-between'} align={'middle'}>
        <Col span={4} style={{textAlign:'start'}}>
          <div>Logo</div>
        </Col>
        <Col span={26}>
          <div>Logo</div>
        </Col>
        <Col span={4} style={{textAlign:'end'}}>
          <ButtonBasic
            onClick={connectMeta}
            className={styles['bnt-login']}
          >
            Login
          </ButtonBasic>
        </Col>
      </Row>
    )
  }
  const renderMobile = ()=>{
    return( <></> )
  }
  return (
    <ContainerHome>
      <Media query='(min-width: 768px)'>
        {( match ) => {
          if ( match ) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHome>
  )
}

export default Header