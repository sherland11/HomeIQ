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
            <div className={styles.mainPage__title}>Упростите свою жизнь с приложением TaskMaster</div>
            <div className={styles.mainPage__subTitle}>
              TaskMaster - это инновационное мобильное приложение, которое поможет вам организовать вашу повседневную жизнь и повысить производительность. Независимо от того, что у вас на повестке дня, TaskMaster делает управление задачами и временем простым и эффективным.
            </div>
            <div className={styles.mainPage__buttons}>
              <Link href="/build" className={styles.mainPage__accentBtn}>Скачать</Link>
              <Link href="/info" className={styles.mainPage__secondaryBtn}>Подробности</Link>
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
          <div className={styles.mainPage__cardsTitle}>Почему выбирают нас</div>
          <div className={styles.mainPage__cardsContent}>
            <Card image={firstImg} title="Кастомизация" subTitle="Настраивайте свой список задач и управляйте им, чтобы отразить ваш стиль и приоритеты."></Card>
            <Card image={secondImg} title="Уведомления" subTitle="Не забудьте о важных задачах благодаря удобным напоминаниям и уведомлениям."></Card>
            <Card image={firstImg} title="Интеграция" subTitle="Синхронизируйте свой TaskMaster с календарем и контактами для лучшей организации вашей жизни."></Card>
            <Card title="Мультиплатформенность" subTitle="Доступ к вашим задачам и спискам с любого устройства - iOS, Android, и даже веб."></Card>
            <Card title="Простой интерфейс" subTitle=" Легко создавайте, редактируйте и управляйте задачами с интуитивно понятным интерфейсом."></Card>
            <Card title="Интерактивный опыт" subTitle="Ощутите удовольствие от работы с приложением благодаря мгновенным обновлениям и жестам для управления задачами."></Card>
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
