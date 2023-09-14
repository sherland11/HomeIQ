import styles from '@/styles/contacts.module.css'

export default function contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__content}>
                <form className={styles.contacts__form}>
                    <div className={styles.contacts__formGroup}>
                        <label htmlFor='contactEmail'>Ваш Email</label>
                        <input type="email" name='contactEmail' />
                    </div>
                    <div className={styles.contacts__formGroup}>
                        <label htmlFor='contactText'>Как мы можем вам помочь?</label>
                        <textarea name='contactText'></textarea>
                    </div>
                    <button type='submit'>Отправить</button>
                </form>
                <div className={styles.contacts__media}>Медия</div>
            </div>
        </div>
    )
}