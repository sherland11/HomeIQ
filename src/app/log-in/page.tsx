import styles from "@/styles/authentication.module.css"

export default function authentication() {
    return (
        <div className={styles.authentication}>
            <form className={`${styles.authentication__form} ${styles.authentication__form_logIn}`}>
                <label className={styles.authentication__title}>Log in</label>
                <input type="text" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
                <button type="submit" className={styles.authentication__submit}>Log in</button>
            </form>
        </div>
    )
}