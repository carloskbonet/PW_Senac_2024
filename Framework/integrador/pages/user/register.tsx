import styles from "@/styles/register.module.css";

export default function register() {

    return (
        // username, senha, confirmação de senha, email
        <main className={styles.mainContainer}>
            
            <img className={styles.image} src="/frame.jpg" alt="" />

            <form className={styles.form}>
                <input type="text" placeholder="Nome de Usuário" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Senha" />
                <br />
                <input type="password" placeholder="Confirmação de Senha" />
            
                <input className={styles.sendBtn} type="submit" value="Enviar" />
            </form>

        </main>
    );
}