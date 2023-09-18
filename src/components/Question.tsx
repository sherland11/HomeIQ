import styles from '@/styles/question.module.css'

interface Props {
    question: string
    answer: string
}

export default function Question({question, answer}: Props) {
    return (
        <div className={styles.question}>
            <p className={styles.question__issue}>{question}</p>
            <p className={styles.question__answer}>{answer}</p>
        </div>
    )
}