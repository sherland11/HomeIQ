import styles from "@/styles/signUp.module.css"

export default function signUp() {
    return (
        <div className={styles.signUp}>
            <form className={styles.signUp__form}>
                <label>Sign up</label>
                <input type="text" placeholder="Enter your email" />
                <input type="password" placeholder="Create a password" />
                <input type="password" placeholder="Confirm your password" />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}