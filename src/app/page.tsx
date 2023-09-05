import Card from '@/components/Card'
import styles from '@/styles/mainPage.module.css'
import Link from 'next/link'
import firstImg from '@/images/1.png'
import secondImg from '@/images/2.png'

export default function Home() {
  return (
    <div className={styles.mainPage}>

      <header className={styles.mainPage__header}>
        <nav className={styles.mainPage__nav}>
            <ul>
                <li><Link href="/" className={styles.mainPage__logo}>Логотип</Link></li>
                <li><Link href="/build">Сборка</Link></li>
                <li><Link href="/blog">Блог</Link></li>
                <li><Link href="/contacts">Контакты</Link></li>
            </ul>
            <div className={styles.mainPage__authentication}>
              <Link href="/log-in" className={styles.mainPage__blackBtn}>Вход</Link>
              <Link href="/sign-up" className={styles.mainPage__whiteBtn}>Регистрация</Link>
            </div>
        </nav>
      </header>

      <main className={styles.mainPage__content}>

        <div className={styles.mainPage__banner}>
          <div className={styles.mainPage__bannerText}>
            <div className={styles.mainPage__title}>Заголовок</div>
            <div className={styles.mainPage__subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex nam illum nostrum quisquam odit, amet debitis eligendi quam minus!</div>
            <div className={styles.mainPage__buttons}>
              <Link href="/build" className={styles.mainPage__whiteBtn}>Заказать</Link>
              <Link href="/2" className={styles.mainPage__blackBtn}>2 кнопка</Link>
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

        <div className={styles.mainPage__example}></div>

      </main>

    </div>
  )
}
