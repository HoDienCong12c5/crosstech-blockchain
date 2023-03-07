import FirebaseService from '@/Services/FirebaseService';
import { useEffect, useState } from 'react';

const useGetNFT = (query = '', page = 1) => {
  const [listNFT, setListNFT] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async () => {
      let arr = []
      const data = await FirebaseService.storeCrossTech.getAllData()
      if (data?.length > 0) {
        data?.map(item => {
          arr.push(item)
        })
      }
      setListNFT(data)
      setLoading(false)
    }
    query && page && getData()
    getData()
  }, [query, query]);
  return {
    listNFTAll: listNFT,
    loading
  }
}

export default useGetNFT