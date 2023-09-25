import Link from "next/link";
import styles from "@/styles/header.module.css"
import Image from "next/image";
import Logo from '@/images/logo.png'


export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul>
                    <li>
                        <Link href="/"  className={styles.header__logo}>
                            <Image src={Logo} alt="Логотип"></Image>
                            <div className={styles.header__title}>HomeIQ</div>
                        </Link>
                    </li>
                    <li><Link href="/contacts">Контакты</Link></li>
                    <li><Link href="/update">Обновления</Link></li>
                    <li><Link href="/FAQ">FAQ</Link></li>
                </ul>
                <div className={styles.header__btn}>
                    <Link href="/install" className={styles.header__installBtn}>Скачать</Link>
                </div>
            </nav>
        </header>
    )
}