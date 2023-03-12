import { GlobalModal, modalConfig } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import MyInput from '@/Components/MyInput'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import IPFSService from '@/Services/IPFSService'
import { getBase64Img, validateAddress } from '@/Utils/function'
import Web3Service from '@/Utils/web3'
import { Form, Upload } from 'antd'
import { useState } from 'react'
import {useWorkModal}from'@/Hook/useModal'
import { ColCustom, ContainerImgMintNFT, ContainerMintNFT, ItemForm, PreImg, RowCustom, SelectCoursers, SelectOption } from './styled'
import useCallBackReject from '@/Hook/useCallBackReject'
import ModalTx from '@/Components/ModalTx'
import { useSelector } from 'react-redux'
const listCoursers = [
  {
    title:'Basic Blackchain',
    key:'basic_blockchain'
  },
  {
    title:'Basic React',
    key:'basic_react'
  }
]
const MintNFT = () => {
  const [form] = Form.useForm()
  const { userAddress } = useUserData()
  const {showModal} = useWorkModal()
  const {callbackRejected} = useCallBackReject()
  const message = useSelector(state => state.locale.messages)

  const [courser, setCourser] = useState('basic_blockchain');
  const [formData, setFormData] = useState({
    addressStudent: '',
    nameStudent: ''
  })
  const [nftPreview, setNftPreview] = useState({
    images: '',
    pathIPFS: ''
  })

  const checkAddress = (rule, address) => {
    if (!validateAddress(address) || address === userAddress) {
      return Promise.reject('error address')
    }
  }
  const insertFirebase = async (hash,nonce,pathIPFS) => {
    const dataTx = {
      nameStudent: formData.nameStudent,
      image: pathIPFS
    }
    let data = {
      time: new Date.now(),
      form: userAddress,
      to: formData.addressStudent,
      data: JSON.stringify(dataTx),
      hash: hash,
      title: courser,
      tokenId:nonce
    }
    FirebaseService.storeCrossTech.addData(data)
  }
  const mintNFT = async(pathIPFS)=>{
    let noneUser = await Web3Service.getNonce(userAddress)
    noneUser = noneUser + 1
    showModal({
      body:<ModalTx
        title={message.confirm.mintNFT.confirm}
        des={message.confirm.mintNFT.confirm_des}
      />,
      modalConfig:modalConfig
    })
    const callbackBeforeDone = ()=>{
      let styleModal = modalConfig
      styleModal.clickESCClose = false
      styleModal.showIconClose = false
      styleModal.clickOverClose = false
      showModal({
        body:<ModalTx
          title={message.confirm.mintNFT.start}
          des={message.confirm.mintNFT.start_des}
        />,
        modalConfig:styleModal
      })
    }
    const callbackAfterDone = (hash)=>{
      showModal({
        body:<ModalTx
          title={message.confirm.mintNFT.success}
          des={message.confirm.mintNFT.success_des}
        />,
        modalConfig:modalConfig
      })
      insertFirebase(hash,noneUser,pathIPFS)
    }
    await Web3Service.mintNFT(
      userAddress,
      'ox... contract',
      noneUser,
      callbackBeforeDone,
      callbackAfterDone,
      callbackRejected
    )
  }
  const handleSubmitMint = async () => {
    // const path = await IPFSService.uploadFile(nftPreview.pathIPFS)
    // console.log({ path });
    // await mintNFT(path)
    alert('succse')
  }
  const handlePreview = async (file) => {
    const f = await getBase64Img(file)
    setNftPreview({ pathIPFS: file, images: f });
  }
  const changeCourser = (courser)=>{
    setCourser(courser)
  }

  return (
    <div className='container-basic'>
      <ContainerMintNFT>
        <ContainerImgMintNFT>
          <div style={{ width: '100%', height: '85%' }}>
            <PreImg src={nftPreview.images} />
          </div>
          <Upload
            showUploadList={false}
            accept='.png,.jpg,.jpeg,.gif,.svg'
            beforeUpload={handlePreview}
          // onChange={handleChangeImg}
          >{message.mintNFT.addNewImg}
          </Upload>
        </ContainerImgMintNFT>

        <ItemForm
          onFinish={handleSubmitMint}
          onFinishFailed={()=>alert('error')}
          name={'ratio'}
          rules={[{ validator: () => { } }]}
        >
          <RowCustom >
            <ColCustom span={10}>
              {message.mintNFT.coursers}
            </ColCustom>
            <ColCustom span={14}>
              <SelectCoursers
                onChange={(value) => changeCourser(value)}
                // suffixIcon={<img src={images.icArrowBold} />}
                // dropdownClassName='filter-select-dropdown'
                defaultValue={courser}
                value={courser}
              >
                {listCoursers.map((item)=>(
                  <SelectOption key={item} value={item.key}>
                    {item.title}
                  </SelectOption>
                ))}

              </SelectCoursers>
            </ColCustom>
          </RowCustom>
        </ItemForm>

        <Form
          form={form}
          initialValues={formData}
          onValuesChange={(changedValues, allValue) =>
            setFormData(allValue)
          }
        >
          <ItemForm
            style={{ width: '100%' }}
            name={'addressStudent'}
            rules={[{ validator: checkAddress }]}
          >
            <RowCustom>
              <ColCustom span={10}>
                {message.textPopular.address}
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={message.textPopular.address}
                />
              </ColCustom>
            </RowCustom>
          </ItemForm>

          <ItemForm
            style={{ width: '100%' }}
            name={'nameStudent'}
          >
            <RowCustom>
              <ColCustom span={10}>
                {message.mintNFT.student}
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={'Coursers'}
                  onKeyPress={(event) => {}}
                />
              </ColCustom>
            </RowCustom>


          </ItemForm>
          <ItemForm>
            <ButtonBasic
              htmlType="submit"
              // onClick={handleSubmitMint}
              className={'mt-20 mb-20'}>
              {message.mintNFT.mintNFT}
            </ButtonBasic>
          </ItemForm>

        </Form>
        <div style={{ width: '100%', borderBottom: '1px solid black' }} />

      </ContainerMintNFT>


    </div>
  )
}
export default MintNFT
