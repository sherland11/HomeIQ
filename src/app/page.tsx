import Card from '@/components/Card'
import styles from '@/styles/mainPage.module.css'
import Link from 'next/link'
import firstCardImg from '@/images/phone.png'
import secondCardImg from '@/images/power-bank.png'
import thirdCardImg from '@/images/key.png'
import firstPartnerImg from '@/images/google-nest.png'
import secondPartnerImg from '@/images/amazon-echo.png'
import thirdPartnerImg from '@/images/philips-hue.png'
import Image from 'next/image'
import Review from '@/components/Review'

export default function Home() {
  return (
    <div className={styles.mainPage}>
      
      <main className={styles.mainPage__content}>

        <div className={styles.mainPage__banner}>
          <div className={styles.mainPage__bannerText}>
            <div className={styles.mainPage__title}>Упростите свою жизнь с приложением HomeIQ</div>
            <div className={styles.mainPage__subTitle}>
              HomeIQ - это современное мобильное приложение, которое придает вашему умному дому дополнительный уровень интеллекта. От управления освещением и климатом до обеспечения безопасности вашего дома, HomeIQ делает вашу жизнь более комфортной и безопасной. Управляйте вашим домом с умом с HomeIQ.
            </div>
            <div className={styles.mainPage__buttons}>
              <Link href="/install" className={styles.mainPage__accentBtn}>Скачать</Link>
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
            <Card image={firstCardImg} title="Голосовое управление" subTitle="Управляйте вашим умным домом голосом, используя голосовых помощников, таких как Amazon Alexa и Google Assistant." />
            <Card image={secondCardImg} title="Энергосбережение" subTitle="Оптимизируйте потребление энергии и снижайте коммунальные счета благодаря интеллектуальному управлению ресурсами." />
            <Card image={thirdCardImg} title="Безопасность" subTitle="Повышенная безопасность с детекторами утечки газа и интеграцией с системами наблюдения." />
            <Card title="Мультимедийный контроль" subTitle="Управляйте аудио, видео и стримингом музыки в вашем доме из одного приложения." />
            <Card title="Интеграция умных устройств" subTitle="Широкая совместимость с умными устройствами и брендами для полного управления вашим умным домом." />
            <Card title="Персонализированный доступ" subTitle="Создавайте профили и управляйте доступом для разных пользователей вашего умного дома." />
            <Card title="Мгновенное уведомление" subTitle="Мгновенные уведомления о событиях в вашем умном доме, позволяя вам быть в курсе важных событий в режиме реального времени" />
            <Card title="Умное расписание" subTitle="Создавайте интеллектуальные расписания и сценарии для автоматизации домашних задач." />
            <Card title="Интеграция с датчиками" subTitle="Интеграция с умными датчиками и сенсорами для контроля и безопасности вашего дома." />
          </div>
        </div>

        <div className={styles.mainPage__partner}>
          <div className={styles.mainPage__partnerTitle}>Наши партнеры</div>
          <div className={styles.mainPage__partnerImages}>
            <Image 
              src={firstPartnerImg} 
              alt='google nest'
            />
            <Image 
              src={secondPartnerImg} 
              alt='amazon echo'
            />
            <Image 
              src={thirdPartnerImg} 
              alt='philips hue'
            />
          </div>
        </div>

        <div className={styles.mainPage__reviews}>
          <Review
            company='Google Nest'
            text='HomeIQ превзошел наши ожидания. Это мощное и удобное приложение, которое интегрируется с нашими устройствами безупречно. Оно действительно упрощает жизнь пользователей.'
          />
          <div className={styles.mainPage__reviews_border}></div>
          <Review
            company='Amazon Echo'
            text='HomeIQ добавил значительную ценность в экосистему голосовых помощников. Интеграция с нашей системой Alexa делает управление умным домом более интуитивным и удобным для наших клиентов.'
          />
          <div className={styles.mainPage__reviews_border}></div>
          <Review 
            company='Philips Hue'
            text='Мы рады сотрудничеству с HomeIQ. Наше умное освещение Philips Hue отлично взаимодействует с приложением HomeIQ, предоставляя пользователям беспрецедентный контроль над светом в их домах.'
          />
        </div>

      </main>

    </div>
  )
}
