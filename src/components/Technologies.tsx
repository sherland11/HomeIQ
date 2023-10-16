import styles from '@/styles/technologies.module.css'
import Animated from './Animated'
import Technology from './Technology'
import GoogleCloud from '@/images/google-cloud-platform.png'
import SigFox from '@/images/sigfox.png'
import Kotlin from '@/images/kotlin.png'
import PostgreSql from '@/images/postgresql.png'
import GoogleAssistant from '@/images/google-assistant.png'
import GoogleAI from '@/images/google-ai.png'

export default function Technologies() {
    return (
        <div className={styles.technologies}>
          <Animated>
            <div className={styles.technologies__title}>Мы используем последние технологии</div>
          </Animated>
          <div className={styles.technologies__content}>
            <Technology 
              title='Облачные вычисления'
              img={GoogleCloud} 
              text='HomeIQ использует облачную платформу Google Cloud Platform для хранения и обработки данных умного дома, обеспечивая доступность и синхронизацию на разных устройствах.'
            />
            <Technology 
              title='IoT'
              img={SigFox}
              text='С технологиями SigFox IoT HomeIQ собирает данные о состоянии и потреблении ресурсов в реальном времени, что позволяет мониторить и управлять устройствами.'
            />
            <Technology 
              title='Мобильное разработка'
              img={Kotlin}
              text='Приложение HomeIQ разрабатывается с использованием Kotlin (Android) и Swift (iOS), обеспечивая множественную платформенную поддержку.'
            />
            <Technology 
              title='Базы данных и хранение'
              img={PostgreSql}
              text=' HomeIQ использует мощные базы данных, такие как PostgreSQL и MongoDB, для хранения и анализа данных о потреблении ресурсов и настройках пользователей.'
            />
            <Technology 
              title='Голосовые помощники'
              img={GoogleAssistant}
              text='HomeIQ интегрируется с голосовыми помощниками, такими как Amazon Alexa и Google Assistant, что позволяет вам управлять вашим умным домом голосом.'
            />
            <Technology 
              title='Искусственный интеллект'
              img={GoogleAI}
              text='Искусственный интеллект анализирует данные о потреблении ресурсов, предоставляя рекомендации для оптимизации умного дома, мы используем технологии Google AI.'
            />
          </div>
        </div>
    )
}