import styles from '@/styles/install.module.css'
import Image from 'next/image'
import Android from '@/images/android.png'
import Apple from '@/images/apple.png'
import Link from 'next/link'
import GooglePlay from '@/images/google-play.png'
import AppStore from '@/images/app-store.png'

export default function install() {
    return (
        <div className={styles.install}>
            <div className={styles.install__content}>
                <div className={styles.install__platform}>
                    <Image width={1000} height={1000} src={Android} alt='Andoroid' className={styles.install__logo} />
                    <Link href='https://play.google.com/' className={styles.install__btn}><Image src={GooglePlay} alt='Google Play' /></Link>
                </div>
                <div className={styles.install__platform}>
                <Image width={1000} height={1000} src={Apple} alt='Apple' className={styles.install__logo} />
                    <Link href='https://www.apple.com/ru/app-store/' className={styles.install__btn}><Image src={AppStore} alt='Google Play' /></Link>
                </div>
            </div>
        </div>
    )
}