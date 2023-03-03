import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useUserData = () => {
  const [isSigned, setIsSigned] = useState( false )
  const metamaskRedux = useSelector( state=>state.metamaskRedux )
  useEffect( () => {
    if( metamaskRedux?.address && metamaskRedux?.address !== '' ){
      setIsSigned( true )
    }
  }, [metamaskRedux] )
  return {
    isSigned:isSigned,
    userAddress:metamaskRedux?.address ?? '',
    chainId:metamaskRedux?.chainId ?? ''
  }
}

export default useUserData