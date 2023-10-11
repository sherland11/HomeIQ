'use client'
import styles from '@/styles/contacts.module.css'
import Vk from '@/images/vk.svg'
import Tg from '@/images/telegram.svg'
import X from '@/images/X.svg'
import Link from 'next/link'
import Animated from '@/components/Animated'
import { ThemeContext } from '@/contexts/ThemeContext'

export default function contacts() {
    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}: any) => (
                <Animated>
                    <div className={styles.contacts}>
                        <div className={styles.contacts__title}>Свяжитесь с нами</div>
                        <div className={styles.contacts__content}>
                            <form className={styles.contacts__form}>
                                <div className={styles.contacts__formGroup}>
                                    <label htmlFor='contactEmail'>Ваш Email</label>
                                    <input type="email" name='contactEmail' />
                                </div>
                                <div className={styles.contacts__formGroup}>
                                    <label htmlFor='contactText'>Как мы можем вам помочь?</label>
                                    <textarea name='contactText'></textarea>
                                </div>
                                <button type='submit'>Отправить</button>
                            </form>
                            <div className={styles.contacts__media}>
                                <div className={styles.contacts__mediaTitle}>Наши соцсети</div>
                                <div className={styles.contacts__logo}>
                                    <Link href="https://vk.com/"><Vk fill={theme === 'light' ? '#000000' : '#ffffff'}></Vk></Link>
                                    <Link href="https://telegram.org/"><Tg fill={theme === 'light' ? '#000000' : '#ffffff'}></Tg></Link>
                                    <Link href="https://twitter.com/"><X fill={theme === 'light' ? '#000000' : '#ffffff'}></X></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            )}
        </ThemeContext.Consumer>
        
    )
}