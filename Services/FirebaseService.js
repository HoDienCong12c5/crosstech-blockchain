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
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FB,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APPID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// }
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
console.log('====================================');
console.log({firebaseConfig});
console.log('====================================');
// const firebaseConfig = {
//   apiKey: 'AIzaSyCXFxZWd18pNxsgbQaVUcL575HIcXez5Fo',
//   authDomain: 'bth4-d5049.firebaseapp.com',
//   databaseURL: 'https://bth4-d5049-default-rtdb.firebaseio.com',
//   projectId: 'bth4-d5049',
//   storageBucket: 'bth4-d5049.appspot.com',
//   messagingSenderId: '24144431299',
//   appId: '1:24144431299:web:9209482646946ee5edba76',
//   measurementId: 'G-R7EXMD6CDK'
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
setLogLevel('debug')
export const fireStores = getFirestore(app)
const fireStorages = getStorage(app)

const dbCrossTech = collection(fireStores, 'Cross-Tech')
const dbImgAvatar = 'avatar'
const FirebaseService = {
  storeCrossTech: functionStore(dbCrossTech),
  FireStorages: {
    avatar: functionStore(fireStorages, dbImgAvatar)
  }

}

export default FirebaseService
