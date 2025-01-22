import styles from "@/styles/register.module.css";

export default function register() {

    async function callServer() {
        try {
            const response = await fetch(`/api/response`,{
                method: 'POST',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({ 'username' : 'teste', 'email':'email@teste.com', 'password':'123', 'confirmPassword':'123' })
            })

        }
        catch (err) {
            alert(err);
        }   
    }


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