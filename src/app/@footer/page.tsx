'use client'
import { useState } from "react"
import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import Sun from '@/images/sun.svg'
import Laptop from '@/images/laptop.svg'
import Moon from '@/images/moon.svg'
import { ThemeContext, themes } from "@/contexts/ThemeContext"

export default function Footer() {
    const [themeActive, setThemeActive] = useState<string>("system")

    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}: any) => (
                <footer className={styles.footer}>
                    <div className={styles.footer__menu}>
                        <nav className={styles.footer__nav}>
                            <Link href="/contacts">Контакты</Link>
                            <Link href="/update">Обновления</Link>
                            <Link href="/FAQ">FAQ</Link>
                        </nav>
                        <div className={styles.footer__theme}>
                            <Sun className={themeActive === "light" ? styles.footer__theme_active : ""} onClick={() => { 
                                setTheme(themes.light)
                                setThemeActive("light")
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                            <Laptop className={themeActive === "system" ? styles.footer__theme_active : ""} onClick={() => {
                                setTheme(themes.system)
                                setThemeActive("system")
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                            <Moon className={themeActive === "dark" ? styles.footer__theme_active : ""} onClick={() => { 
                                setTheme(themes.dark)
                                setThemeActive("dark")
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                        </div>
                    </div>
                    <div className={styles.footer__company}>© 2023 HomeIQ, Inc.</div>
                </footer>
            )}
        </ThemeContext.Consumer>
    )
}