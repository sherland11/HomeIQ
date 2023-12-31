import styles from '@/styles/update.module.css'
import Animated from './Animated'

interface Props {
    version: string
    upgrades: string[]
}

export default function Update({version, upgrades}: Props) {
    return (
        <Animated>
            <div className={styles.update__content}>
                <div className={styles.update__subTitle}>Версия {version}</div>
                <div className={styles.update__upgrades}>
                    {upgrades.map((text, index) => (
                        <div className={styles.update__upgrade} key={index}>{index + 1}. {text}</div>
                    ))}
                </div>
            </div>
        </Animated>
    )
}