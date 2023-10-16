import styles from '@/styles/cards.module.css'
import Animated from './Animated'
import Card from './Card'
import firstCardImg from '@/images/phone.png'
import secondCardImg from '@/images/power-bank.png'
import thirdCardImg from '@/images/key.png'

export default function Cards() {
    return (
        <div className={styles.cards}>
          <Animated>
            <div className={styles.cards__title}>Почему выбирают нас</div>
          </Animated>
          <div className={styles.cards__content}>
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
    )
}