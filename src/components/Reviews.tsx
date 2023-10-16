import styles from '@/styles/reviews.module.css'
import Animated from './Animated'
import Review from './Review'

export default function Reviews() {
    return (
      <Animated>
        <div className={styles.reviews}>
          <Animated>
            <Review
                company='Google Nest'
                text='HomeIQ превзошел наши ожидания. Это мощное и удобное приложение, которое интегрируется с нашими устройствами безупречно. Оно действительно упрощает жизнь пользователей.'
            />
          </Animated>
          <Animated>
            <Review
              company='Amazon Echo'
              text='HomeIQ добавил значительную ценность в экосистему голосовых помощников. Интеграция с нашей системой Alexa делает управление умным домом более интуитивным и удобным для наших клиентов.'
            />
          </Animated>
          <Animated>
            <Review 
              company='Philips Hue'
              text='Мы рады сотрудничеству с HomeIQ. Наше умное освещение Philips Hue отлично взаимодействует с приложением HomeIQ, предоставляя пользователям беспрецедентный контроль над светом в их домах.'
            />
          </Animated>
        </div>
      </Animated>
    )
}