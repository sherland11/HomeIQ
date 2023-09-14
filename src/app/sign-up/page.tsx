import styles from "@/styles/authentication.module.css"

export default function authentication() {
    return (
        <div className={styles.authentication}>
            <form className={`${styles.authentication__form} ${styles.authentication__form_signUp}`}>
                <label className={styles.authentication__title}>Sign up</label>
                <input type="text" placeholder="Enter your email" />
                <input type="password" placeholder="Create a password" />
                <input type="password" placeholder="Confirm your password" />
                <button type="submit" className={styles.authentication__submit}>Sign up</button>
            </form>
        </div>
    )
}