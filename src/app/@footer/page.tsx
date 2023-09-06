import styles from '@/styles/footer.module.css'
import Link from 'next/link'

export default function footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__menu}>
                <nav className={styles.footer__nav}>
                    <Link href="/" className={styles.footer__logo}>Логотип</Link>
                    <Link href="/build">Сборка</Link>
                    <Link href="/blog">Блог</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
                <div className={styles.footer__theme}>
                    <div className={styles.footer__lightTheme}></div>
                    <div className={styles.footer__systemTheme}></div>
                    <div className={styles.footer__darkTheme}></div>
                </div>
            </div>
            <div className={styles.footer__company}>© 2023 MyCompany, Inc.</div>
        </footer>
    )
}