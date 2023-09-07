'use client'
import { useState } from "react"
import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import Sun from '@/images/sun.svg'
import Laptop from '@/images/laptop.svg'
import Moon from '@/images/moon.svg'

export default function footer() {

    const [theme, setTheme] = useState<string>("dark")

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
                    <Sun className={theme === "light" ? styles.footer__theme_active : ""} onClick={() => setTheme("light")} fill="#ffffff" />
                    <Laptop className={theme === "system" ? styles.footer__theme_active : ""} onClick={() => setTheme("system")} fill="#ffffff" />
                    <Moon className={theme === "dark" ? styles.footer__theme_active : ""} onClick={() => setTheme("dark")} fill="#ffffff" />
                </div>
            </div>
            <div className={styles.footer__company}>© 2023 MyCompany, Inc.</div>
        </footer>
    )
}