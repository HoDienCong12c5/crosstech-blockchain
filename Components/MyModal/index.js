import ReduxService from '@/Utils/ReduxService'
import { Modal } from 'antd'
import { useSelector } from 'react-redux'
import './MyModal.module.scss'
const MyModal = ( ) => {
  const defaultModalConfig = {
    wrapClassName: '',
    width: 500,
    maskClosable: true,
    isDisableIcon: false,
    closable: true,
    maskStyle: {},
    title: null,
    footer: null
  }
  const globalModal = useSelector( state=>state.globalModal )
  return (
    <Modal
      {...defaultModalConfig}
      {...defaultModalConfig}
      {...globalModal?.modalConfig}
      centered
      open={globalModal?.showModal}
      onCancel={ReduxService.closeModal()}
    //   closeIcon={<img src={images.icClose} />}
    >
      {globalModal?.body}
    </Modal>
  )
}

export default MyModal