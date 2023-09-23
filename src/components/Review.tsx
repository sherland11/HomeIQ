import styles from '@/styles/review.module.css'

interface Props {
    company: string
    text: string
}

export default function Review({ company, text }: Props) {
    return (
        <div className={styles.review}>
            <div className={styles.review__text}>{text}</div>
            <div className={styles.review__company}>{company}</div>
        </div>
    )
}