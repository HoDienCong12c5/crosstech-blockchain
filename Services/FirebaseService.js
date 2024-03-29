import { initializeApp } from 'firebase/app';
import {
  collection, getFirestore,
  setLogLevel
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import functionStore from './functionStore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FB,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setLogLevel('debug')
export const fireStores = getFirestore(app)
const fireStorages = getStorage(app)

const dbCrossTech = collection(fireStores, 'Cross-Tech')
const dbContact = collection(fireStores, 'contact')
const dbImgAvatar = 'avatar'
const FirebaseService = {
  storeCrossTech: functionStore(dbCrossTech),
  storeContact: functionStore(dbContact),
  FireStorages: {
    avatar: functionStore(fireStorages, dbImgAvatar)
  }

}

export default FirebaseService
