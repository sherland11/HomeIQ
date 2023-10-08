import styles from '@/styles/burger.module.css'
import Link from 'next/link'

interface Props {
    setMenuOpen: (newValue: boolean) => void
}

export default function Burger({ setMenuOpen }: Props) {
    return (
        <div className={styles.burger}>
            <nav className={styles.burger__nav}>
                <Link onClick={() => setMenuOpen(false)} href="/contacts">Контакты</Link>
                <Link onClick={() => setMenuOpen(false)} href="/update">Обновления</Link>
                <Link onClick={() => setMenuOpen(false)} href="/FAQ">FAQ</Link>
                <Link onClick={() => setMenuOpen(false)} href="/install" className={styles.burger__installBtn}>Скачать</Link>
            </nav>
        </div>
    )
}