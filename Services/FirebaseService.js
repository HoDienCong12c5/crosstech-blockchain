import { initializeApp } from 'firebase/app'
import {
  collection, getFirestore
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import functionStore from './functionStore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

// Initialize Firebase
const app= initializeApp( firebaseConfig );

// const app = initializeApp(firebaseConfig)
export const fireStores = getFirestore( app )
const fireStorages = getStorage( app )
// export const fireData = getDatabase(app)

const dbProduct = collection( fireStores, 'coffe' )
const dbUser = collection( fireStores, 'users' )
const dbCart = collection( fireStores, 'cart' )
const dbOtherHome = collection( fireStores, 'otherHome' )
const dbDiscount = collection( fireStores, 'discount' )
const dbContact = collection( fireStores, 'contact' )

const dbImgProduct = 'coffee'
const dbImgAvatar = 'avatar'
const dbImgOtherHome ='OtherBanner'
const FirebaseService = {
  FireStore:{
    Product:functionStore( dbProduct ),
    User:functionStore( dbUser ),
    Cart:functionStore( dbCart ),
    Discount :functionStore( dbDiscount ),
    OtherHome:functionStore( dbOtherHome ),
    Contact:functionStore( dbContact )
  },

  FireStorages:{
    otherHome:functionStore( fireStorages,dbImgOtherHome ),
    avatar:functionStore( fireStorages,dbImgAvatar )
  }

}

export default FirebaseService