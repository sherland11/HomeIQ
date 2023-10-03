import styles from '@/styles/technology.module.css'
import Image, { StaticImageData } from 'next/image'
import Animated from './Animated'

interface Props {
    img: StaticImageData
    title: string
    text: string
}

export default function Technology({img, text, title}: Props) {
    return (
        <Animated>
            <div className={styles.technology}>
                <Image src={img} alt={title} className={styles.technology__img} />
                <div className={styles.technology__title}>{title}</div>
                <div className={styles.technology__text}>{text}</div>
            </div>
        </Animated>
    )
}