import styles from "@/styles/register.module.css";
import { useState } from "react";

export default function Register() {
    const [ formData , setFormData ] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );

    // Função para alterar o formulário
    function handleFormEdit(event:any, field:string) {
        setFormData({
            ...formData,
            [field]: event.target.value
        });

        console.log(formData);
    }

    // Função para chamar o servidor
    async function formSubmit() {
        try {
            // Requisição
            const response = await fetch(`/api/action/user/create`, {
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(formData)
            });

            // Formatar a resposta recebida do servidor
            const responseData = await response.json();

            // Exibir resposta
            alert(responseData.message);

        }
        catch (err) {
            console.log(err);
            alert('Algo deu errado.');
        }
    }


    return (
        // username, senha, confirmação de senha, email
        <main className={styles.mainContainer}>
            <img className={styles.image} src="/frame.jpg" alt="" />

            <form className={styles.form} onSubmit={formSubmit} >
                <input type="text" placeholder="Nome de Usuário" onChange={ (e) => { handleFormEdit(e , 'name') }  } />
                <br />
                <input type="email" placeholder="Email" onChange={ (e) => { handleFormEdit(e , 'email') }  } />
                <br />
                <input type="password" placeholder="Senha" onChange={ (e) => { handleFormEdit(e , 'password') }  } />
                <br />
                <input type="password" placeholder="Confirmação de Senha" onChange={ (e) => { handleFormEdit(e , 'confirmPassword') }  } />
            
                <input className={styles.sendBtn} type="submit" value="Enviar" />
            </form>
        </main>
    );
}