import Image, { StaticImageData } from "next/image"
import styles from "@/styles/card.module.css"
import Animated from "./Animated"

interface Props {
    image?: StaticImageData
    title: string
    subTitle: string
}

export default function Card({image, title, subTitle}: Props) {
    return (
        <Animated>
            <div className={image ? styles.card : `${styles.card} ${styles.card_withOutImage}`}>
                {image && 
                    <Image 
                    className={styles.card__image} 
                    src={image} 
                    alt={title} 
                    width={1416} 
                    height={672} />
                }
                <div className={image ? styles.card__title : `${styles.card__title} ${styles.card__title_withOutImage}`}>{title} </div>
                <div className={styles.card__subTitle}>{subTitle}</div>
            </div>
        </Animated>
    )
}