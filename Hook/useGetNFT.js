import FirebaseService from '@/Services/FirebaseService';
import React,{useState,useEffect} from 'react'

const useGetNFT = ( query = '',page = 1 ) => {
  const [listNFT, setListNFT] = useState( [] )
  const [loading, setLoading] = useState( true )
  useEffect( () => {
    const getData = async()=>{
      let arr = []
      const data = await FirebaseService.storeCrossTech.getAllData()
      if( data?.length > 0 ){
        data?.map( item=>{
          let dataItem = {
            data:JSON.parse( item?.data ),
            from:item?.from,
            to: item?.to,
            hash: item?.hash,
            time: item?.time
          }
          arr.push( dataItem )
        } )
      }
      setListNFT( data )
      setLoading( false )
    }
    query && page && getData()
  }, [query,query] );
  return{
    listNFTAll:listNFT,
    loading
  }
}

export default useGetNFT