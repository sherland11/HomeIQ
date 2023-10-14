import styles from '@/styles/question.module.css'
import Animated from './Animated'

interface Props {
    question: string
    answer: string
}

export default function Question({question, answer}: Props) {
    return (
        <Animated rootMargin10={true}>
            <div className={styles.question}>
                <p className={styles.question__issue}>{question}</p>
                <p className={styles.question__answer}>{answer}</p>
            </div>
        </Animated>
    )
}