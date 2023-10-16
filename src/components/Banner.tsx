import styles from '@/styles/banner.module.css'
import Animated from './Animated'
import Link from 'next/link'

export default function Banner() {
    return (
        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <Animated>
              <div className={styles.banner__title}>Упростите свою жизнь с приложением HomeIQ</div>
            </Animated>
            <Animated>
              <div className={styles.banner__subTitle}>
                HomeIQ - это современное мобильное приложение, которое придает вашему умному дому дополнительный уровень интеллекта. От управления освещением и климатом до обеспечения безопасности вашего дома, HomeIQ делает вашу жизнь более комфортной и безопасной. Управляйте вашим домом с умом с HomeIQ.
              </div>
            </Animated>
            <Animated>
              <div className={styles.banner__buttons}>
                <Link href="/install" className={styles.banner__accentBtn}>Скачать</Link>
                <Link href="/contacts" className={styles.banner__secondaryBtn}>Спросить</Link>
              </div>
            </Animated>
          </div>
          <div className={styles.banner__area}>
            <ul className={styles.banner__circles}>
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
    )
}