import styles from '@/styles/Home.module.css'
// import { Inter } from 'next/font/google'
import HomeScreen from './Screen/Home'
// const inter = Inter( { subsets: ['latin'] } )

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HomeScreen />
      </main>
    </>
  )
}
