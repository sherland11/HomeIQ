'use client'
import { useState } from "react"
import styles from '@/styles/footer.module.css'
import Link from 'next/link'
import Sun from '@/images/sun.svg'
import Laptop from '@/images/laptop.svg'
import Moon from '@/images/moon.svg'
import { ThemeContext, themes } from "@/contexts/ThemeContext"

export default function footer() {

    const [themeActive, setThemeActive] = useState<string>("dark")

    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}: any) => (
                <footer className={styles.footer}>
                    <div className={styles.footer__menu}>
                        <nav className={styles.footer__nav}>
                            <Link href="/" className={styles.footer__logo}>Логотип</Link>
                            <Link href="/build">Сборка</Link>
                            <Link href="/blog">Блог</Link>
                            <Link href="/contacts">Контакты</Link>
                        </nav>
                        <div className={styles.footer__theme}>
                            <Sun className={theme === "light" ? styles.footer__theme_active : ""} onClick={() => { 
                                setTheme(themes.light)
                                setThemeActive("light") 
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                            <Laptop className={themeActive === "system" ? styles.footer__theme_active : ""} onClick={() => { 
                                setTheme(themes.dark)
                                setThemeActive("system") 
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                            <Moon className={theme === "dark" ? styles.footer__theme_active : ""} onClick={() => { 
                                setTheme(themes.dark)
                                setThemeActive("dark") 
                            }} fill={theme === "light" ? "#000000" : "#ffffff"} />
                        </div>
                    </div>
                    <div className={styles.footer__company}>© 2023 MyCompany, Inc.</div>
                </footer>
            )}
        </ThemeContext.Consumer>
    )
}