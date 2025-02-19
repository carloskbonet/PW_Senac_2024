/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const [formData, setFormData] = useState(
        {
            email : "",
            password : ""
        }
    );

    function handleFormEdit(event:any, field:string) {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    }

    // Manda o formulário para o servidor
    function formSubmit(event:any) {
        event.preventDefault();
        try {

        }
        catch(err:any) {
            alert("Algo deu errado");
            console.log(err);
        }
    }

    return (
        <main>
            <form className={styles.form}>
                <img src="/noImage.jpg" alt="" />
                <input type="email" placeholder="Email" onChange={(e) => {handleFormEdit(e , 'email')}} /><br />
                <input type="password" placeholder="Senha" onChange={(e) => {handleFormEdit(e , 'password')}} /><br />

                <input type="submit" className={styles.sendBtn} value="Enviar" />
            </form>
        </main>
    );
}