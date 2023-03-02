import FirebaseService from '@/Services/FirebaseService'
import { useEffect } from 'react'
const Header = () => {
  useEffect( () => {
    const getData=async()=>{
      const res = await FirebaseService.FireStore.Product.getAllData()

    }
    getData()
  }, [] )
  return (
    <div>Header</div>
  )
}

export default Header