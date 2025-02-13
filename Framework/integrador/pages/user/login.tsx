import styles from '@/styles/login.module.css';

export default function Login() {

    return (
        <main>
            <form className={styles.form}>
                <img src="/noImage.jpg" alt="" />
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Senha" /><br />

                <input type="submit" className={styles.sendBtn} value="Enviar" />
            </form>
        </main>
    );
}