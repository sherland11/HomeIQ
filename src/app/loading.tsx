import styles from "@/styles/loading.module.css"

export default function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.loading__circle}></div>
        </div>
    )
}