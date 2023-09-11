import Card from '@/components/Card'
import styles from '@/styles/mainPage.module.css'
import Link from 'next/link'
import firstImg from '@/images/1.png'
import secondImg from '@/images/2.png'
import Image from 'next/image'
import firstExample from "@/images/example/1.jpg"
import secondExample from "@/images/example/2.png"
import thirdExample from "@/images/example/3.jpg"

export default function Home() {
  return (
    <div className={styles.mainPage}>
      
      <main className={styles.mainPage__content}>

        <div className={styles.mainPage__banner}>
          <div className={styles.mainPage__bannerText}>
            <div className={styles.mainPage__title}>Заголовок</div>
            <div className={styles.mainPage__subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex nam illum nostrum quisquam odit, amet debitis eligendi quam minus!</div>
            <div className={styles.mainPage__buttons}>
              <Link href="/build" className={styles.mainPage__accentBtn}>Заказать</Link>
              <Link href="/2" className={styles.mainPage__secondaryBtn}>2 кнопка</Link>
            </div>
          </div>
          <div className={styles.mainPage__area}>
            <ul className={styles.mainPage__circles}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
        </div>

        <div className={styles.mainPage__cards}>
          <div className={styles.mainPage__cardsTitle}>Заголовок</div>
          <div className={styles.mainPage__cardsContent}>
            <Card image={firstImg} title="Title card 1" subTitle="faaaa aaaaaaaaaa aaaaaa aaaaaa aaaaaa"></Card>
            <Card image={secondImg} title="Title card 2" subTitle="faaa aaaaaaaaaa aaaaaa aaaaaaa aaaaaa"></Card>
            <Card image={firstImg} title="Title card 3" subTitle="faa aaaaaaa aaaaa aaaaaaaaaa aaaaaaaa"></Card>
            <Card title="Title card 4" subTitle="af wwwwww wwwwww wwwwwwwww wwwwwwwwwwwww"></Card>
            <Card title="Title card 5" subTitle="afwwwwww wwwwwwwwwwww wwwwwwwwww wwwwww"></Card>
            <Card title="Title card 6" subTitle="afw wwwww wwwww wwwwww wwwwww wwwwwwwwwww"></Card>
          </div>
        </div>

        <div className={styles.mainPage__example}>
          <div className={styles.mainPage__exampleTitle}>Примеры</div>
          <div className={styles.mainPage__examples}>
            {[{id: 1, img: firstExample}, {id: 1, img: secondExample}, {id: 1, img: thirdExample}].map(({id, img}) => (
              <div key={id} className={styles.mainPage__exampleImg}>
                <Image src={img} alt="Пример"></Image>
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  )
}
