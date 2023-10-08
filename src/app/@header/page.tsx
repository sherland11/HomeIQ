'use client'
import Link from "next/link";
import styles from "@/styles/header.module.css"
import Image from "next/image";
import Logo from '@/images/logo.png'
import { useState, useEffect } from "react";
import Burger from "@/components/Burger";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen])

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <Link href="/"  className={styles.header__logo} onClick={() => setMenuOpen(false)}>
                    <Image src={Logo} alt="Логотип"></Image>
                    <div className={styles.header__title}>HomeIQ</div>
                </Link>
                <div className={styles.header__links}>
                    <Link href="/contacts">Контакты</Link>
                    <Link href="/update">Обновления</Link>
                    <Link href="/FAQ">FAQ</Link>
                </div>
                <div className={styles.header__btn}>
                    <Link href="/install" className={styles.header__installBtn}>Скачать</Link>
                </div>
                <div className={menuOpen ? `${styles.header__burgerMenu} ${styles.header__burgerMenu_active}` : styles.header__burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className={menuOpen ? styles.header__burgerActive : styles.header__burgerNotActive}>
                <Burger setMenuOpen={setMenuOpen} />
            </div>
        </header>
    )
}