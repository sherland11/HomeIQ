import Link from "next/link";
import styles from "@/styles/header.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul>
                    <li><Link href="/" className={styles.header__logo}>Логотип</Link></li>
                    <li><Link href="/contacts">Контакты</Link></li>
                    <li><Link href="/update">Обновления</Link></li>
                    <li><Link href="/FAQ">FAQ</Link></li>
                </ul>
                <div className={styles.header__authentication}>
                    <Link href="/log-in" className={styles.header__secondaryBtn}>Вход</Link>
                    <Link href="/sign-up" className={styles.header__accentBtn}>Регистрация</Link>
                </div>
            </nav>
        </header>
    )
}