import ButtonBasic from '@/Components/ButtonBasic'
import MyInput from '@/Components/MyInput'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import IPFSService from '@/Services/IPFSService'
import { validateAddress } from '@/Utils/function'
import { Form, Upload } from 'antd'
import { useState } from 'react'
import { ColCustom, ContainerImgMintNFT, ContainerMintNFT, ItemForm, PreImg, RowCustom } from './styled'
const MintNFT = (props) => {
  const { userAddress, isSigned } = useUserData()
  console.log('====================================');
  console.log({ isSigned });
  console.log('====================================');
  const [formData, setFormData] = useState({
    titleCoursers: '',
    nameStudent: '',
    addressStudent: ''
  })
  const [nftPreview, setNftPreview] = useState({
    images: '',
    pathIPFS: ''
  })
  const [form] = Form.useForm()
  const checkAddress = (rule, address) => {
    if (!validateAddress(address)) {
      return Promise.reject('error address')
    }
  }
  const getBase64Img = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const insertFirebase = (hash) => {
    const dataTx = {
      nameStudent: formData.nameStudent,
      image: nftPreview.pathIPFS
    }
    let data = {
      time: new Date.now(),
      form: userAddress,
      to: formData.addressStudent,
      data: JSON.stringify(dataTx),
      hash: hash,
      title: 'Khóa học blockchain'
    }
    FirebaseService.storeCrossTech.addData(data)
  }
  const handleSubmitMint = async () => {
    const path = await IPFSService.uploadFile(nftPreview.pathIPFS)
    console.log({ path });
    setNftPreview({ ...nftPreview, pathIPFS: path });
  }
  const handlePreview = async (file) => {
    const f = await getBase64Img(file);
    setNftPreview({ pathIPFS: file, images: f });
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
          >Add new image</Upload>

        </ContainerImgMintNFT>
        <Form
          // style={styles['body-form']}
          form={form}
          initialValues={formData}
          onValuesChange={(changedValues, allValue) =>
            setFormData(allValue)
          }
        >
          <ItemForm
            // style={styles['ant-form-item']}
            name={'ratio'}
            rules={[{ validator: () => { } }]}
          >
            <RowCustom >
              <ColCustom span={10}>
                Coursers
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={'Coursers'}
                  onKeyPress={(event) => {
                    if (event.target.value.length >= 3 && event.target.value >= 100) {
                      event.preventDefault()
                    }
                  }}
                />
              </ColCustom>
            </RowCustom>
          </ItemForm>

          <ItemForm
            style={{ width: '100%' }}
            name={'ratio'}
            rules={[{ validator: checkAddress }]}
          >
            <RowCustom>
              <ColCustom span={10}>
                Address
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={'Coursers'}
                  onKeyPress={(event) => {
                    if (event.target.value.length >= 3 && event.target.value >= 100) {
                      event.preventDefault()
                    }
                  }}
                />
              </ColCustom>
            </RowCustom>
          </ItemForm>

          <ItemForm
            style={{ width: '100%' }}
            name={'ratio'}
            rules={[{ validator: checkAddress }]}
          >
            <RowCustom>
              <ColCustom span={10}>
                Student
              </ColCustom>
              <ColCustom span={14}>
                <MyInput
                  className='input'
                  autoComplete='off'
                  iconRight={<div style={{ color: 'white' }}>%</div>}
                  placeholder={'Coursers'}
                  onKeyPress={(event) => {
                    if (event.target.value.length >= 3 && event.target.value >= 100) {
                      event.preventDefault()
                    }
                  }}
                />
              </ColCustom>
            </RowCustom>


          </ItemForm>
        </Form>
        <div style={{ width: '100%', borderBottom: '1px solid black' }} />
        <ButtonBasic
          onClick={handleSubmitMint}
          className={'mt-20 mb-20'}>
          Mint NFT
        </ButtonBasic>
      </ContainerMintNFT>


    </div>
  )
}
export default MintNFT