import Animated from "@/components/Animated";
import Update from "@/components/Update";
import styles from '@/styles/update.module.css'

export default function update() {
    return (
        <div className={styles.update}>
            <Animated>
                <div className={styles.update__title}>Обновления приложения HomeIQ</div>
                <div className={styles.update__guide}>
                    <p className={styles.update__subTitle}>Как обновиться:</p>
                    <p>
                        Чтобы получить последнюю версию HomeIQ, перейдите в соответствующий магазин приложений на вашем устройстве (App Store для iOS, Google Play для Android, Microsoft Store для Windows или Mac App Store для macOS) и выполните обновление.
                    </p>
                </div>
                <div className={styles.update__feedback}>
                    <p className={styles.update__subTitle}>Обратная связь:</p>
                    <p>
                        Ваши отзывы и предложения очень важны для нас. Если у вас есть какие-либо замечания или пожелания по новой версии TaskMaster, пожалуйста, свяжитесь с нами с помощью формы обратной связи.
                    </p>
                    <p>Благодарим вас за использование TaskMaster! Мы продолжаем работать над улучшением приложения, чтобы сделать вашу жизнь более организованной и продуктивной.</p>
                </div>
            </Animated>
            <Update 
                version="3.0"
                upgrades={[
                    "Новая голосовая активация: Теперь HomeIQ может быть активирован и управляем голосом без использования дополнительных устройств.",
                    "Совместимость с умными стандартами: Мы добавили поддержку стандартов связи для обеспечения совместимости с большим количеством умных устройств на рынке.",
                    "Многозонное управление: Теперь вы можете создавать и управлять разными зонами в вашем умном доме для более точного контроля.",
                    "Улучшенный мониторинг: Мы расширили функциональность мониторинга, включая анализ энергопотребления и коммуникацию с вашими устройствами в режиме реального времени.",
                    "Интеграция с умными кухонными устройствами: HomeIQ теперь поддерживает интеграцию с умными кухонными приборами, такими как холодильники и духовки, для более удобного управления вашей кухней."
                ]}
            />
            <Update 
                version="2.2"
                upgrades={[
                    "Новый интегрированный планировщик задач: Теперь вы можете создавать и управлять задачами и событиями в умном доме, чтобы автоматизировать рутинные действия.",
                    "Поддержка умных зеркал: HomeIQ теперь совместим с умными зеркалами, что позволяет вам получать информацию о погоде, новостях и других данных прямо на вашем зеркале.",
                    "Улучшенная интеграция с умными устройствами: Мы добавили поддержку новых устройств и расширили функциональность интеграции.",
                    "Множество улучшений пользовательского интерфейса: Мы сделали приложение более интуитивным и удобным в использовании."
                ]}
            />
            <Update 
                version="2.1"
                upgrades={[
                    "Улучшенная стабильность: В этой версии мы продолжили работать над устранением мелких ошибок и улучшением общей стабильности приложения.",
                    "Новые темы оформления: Добавлены новые темы оформления, чтобы вы могли настроить внешний вид приложения под свой стиль.",
                    "Умное управление энергопотреблением: Мы добавили функциональность мониторинга и управления энергопотреблением умных устройств в реальном времени.",
                    "Интеграция с умными системами безопасности: Теперь HomeIQ может взаимодействовать с различными умными системами безопасности для обеспечения полной защиты вашего дома."
                ]}
            />
            <Update 
                version="2.0"
                upgrades={[
                    "Интеллектуальное управление: HomeIQ 2.0 внедряет алгоритмы искусственного интеллекта для предсказания и оптимизации потребления ресурсов, что позволяет вам экономить энергию и снижать счета за коммунальные услуги.",
                    "Расширенный мультимедийный контроль: Теперь вы можете управлять вашей мультимедийной системой - аудио, видео и стримингом музыки - из одного приложения HomeIQ.",
                    "Интеграция с умными автомобилями: HomeIQ поддерживает интеграцию с вашим умным автомобилем. Открывайте и запускайте автомобиль с помощью приложения, а также получайте статус и уведомления о состоянии автомобиля.",
                    "Голосовые команды настроек: Теперь вы можете настроить голосовые команды для управления вашими устройствами и сценариями.",
                    "Дополнительная безопасность: Добавлены новые функции безопасности, включая детекторы утечки газа и интеграцию с системами наблюдения."
                ]}
            />
            <Update 
                version="1.1"
                upgrades={[
                    "Расширенное управление безопасностью: Мы добавили возможность мониторинга и управления системой безопасности вашего умного дома. Теперь вы можете контролировать камеры, датчики движения и дверные замки из приложения HomeIQ.",
                    "Умные сценарии: Создавайте умные сценарии для автоматизации задач. Например, установите сценарий 'Уход из дома', который автоматически выключает свет и регулирует температуру, когда вы уходите.",
                    "Интеграция с голосовыми помощниками: Теперь HomeIQ совместим с голосовыми помощниками, такими как Amazon Alexa и Google Assistant. Управляйте вашим умным домом голосом.",
                    "Дополнительные устройства и бренды: Мы расширили список поддерживаемых устройств и брендов, чтобы вы могли интегрировать больше техники в ваш умный дом.",
                    "Улучшенное уведомление и отчетность: Мы улучшили систему уведомлений, чтобы вы всегда были в курсе происходящего в вашем умном доме, а также добавили функцию создания отчетов о потреблении ресурсов."
                ]}
            />
            <Update 
                version="1.0"
                upgrades={[
                    "Голосовое управление: Теперь вы можете управлять вашим умным домом голосовыми командами. Просто скажите, что вам нужно, и HomeIQ выполнит вашу команду.",
                    "Умное расписание: Создавайте расписания для ваших устройств и систем автоматического управления. Например, настройте автоматическое выключение света в определенное время или регулирование температуры прихода домой.",
                    "Интеграция с умными устройствами: Мы добавили поддержку новых устройств и брендов, чтобы вы могли интегрировать больше устройств в ваш умный дом и управлять ими через HomeIQ.",
                    "Улучшения интерфейса и дизайна: Мы обновили дизайн приложения, чтобы сделать его более интуитивным и привлекательным.",
                    "Повышенная производительность: HomeIQ стал еще быстрее и надежнее, обеспечивая мгновенный доступ к вашему умному дому."
                ]}
            />
        </div>
    )
}