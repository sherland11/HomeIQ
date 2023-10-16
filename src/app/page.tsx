'use client'
import styles from '@/styles/mainPage.module.css'
import Banner from '@/components/Banner'
import Cards from '@/components/Cards'
import Partner from '@/components/Partner'
import Reviews from '@/components/Reviews'
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <main className={styles.mainPage}>
      
      <div className={styles.mainPage__content}>

        <Banner />

        <Cards />

        <Partner />

        <Reviews />

        <Technologies />

      </div>

    </main>
  )
}
