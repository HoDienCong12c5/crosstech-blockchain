
import {
    addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
const FirebaseFun = ( nameData, path='' )=>{
  return {
    getAllData: async () => {
      const citySnapshot = await getDocs( nameData )
      return citySnapshot.docs.map( ( doc ) => {
        let dataTemp=doc.data()
        dataTemp.id=doc.id
        return dataTemp
      } )
    },
    getDataByID: async ( id ) => {
      const temp = doc( nameData, id )
      const data = await getDoc( temp )
      return data.data()
    },
    addData: async ( data ) => {
      const add = await addDoc( nameData, data )
      if ( add ) {
        return true
      }
    },
    updateData: async ( id,name, key ) => {
      const ob = {}
      ob[name] = key
      const temp = await doc( nameData, id )
      await updateDoc( temp, ob )
    },
    deleteData: async ( id ) => {
      await deleteDoc( doc( nameData, id ) )
    },
    upLoadImg: async function ( file ) {
      const pathImg = `/${path}`
      await uploadBytes( pathImg, file ).then( ( snapshot ) => {
        return true
      } )
    },
    getPathImg: async function ( name ) {
      const pathImg = `/${path}/${name}`
      return getDownloadURL( ref( nameData, pathImg ) )
        .then( ( url ) => {
          return url
        } )
        .catch( ( error ) => {
          // Handle any errors
        } )
    },
  }
}
export default FirebaseFun