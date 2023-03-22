import { REACT_QUERY } from '@/common/constant'
import FirebaseService from '@/Services/FirebaseService'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
const getAllData = async({ queryKey })=>{
  console.log('====================================');
  console.log('getdata');
  console.log('====================================');
  const data = await FirebaseService.storeCrossTech.getAllData()
  if (data?.length > 0) {
    return data
  }
  return []
}
const useGetAllNFT = () => {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_NFT],
    getAllData
  )
  return {
    listAllNFT:data,
    loadingLitAllNFT:isLoading,
    errorLitAllNFT:error
  }
}

export default useGetAllNFT
