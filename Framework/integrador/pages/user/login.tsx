/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '@/styles/login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';
import { checkToken } from '@/services/tokenConfig';
import Link from 'next/link';

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
    async function formSubmit(event:any) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/action/user/login', {
                method: 'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            // Se der certo o login, devemos criar um cookie com a chave de acesso
            if ( response.status == 200 ) {
                setCookie('authorization', responseData.data);

                // redirecionar para o início do sistema
                router.push(`/`);
            }
            else {
                alert(responseData.message);
            }
        }
        catch(err:any) {
            alert("Algo deu errado");
            console.log(err);
        }
    }

    return (
        <main>
            <form className={styles.form} onSubmit={formSubmit}>
                <img src="/noImage.jpg" alt="" />
                <input type="email" placeholder="Email" onChange={(e) => {handleFormEdit(e , 'email')}} /><br />
                <input type="password" placeholder="Senha" onChange={(e) => {handleFormEdit(e , 'password')}} /><br />

                <input type="submit" className={styles.sendBtn} value="Enviar" />
                
                <br />
                <Link href={`/user/register`}>Criar Conta</Link>
            </form>
        </main>
    );
}


export async function getServerSideProps( {req , res}:any ) {
    try {
        // encontrar o cookie 'authorization' e armazenar o valor do token
        const token = await getCookie('authorization', {req , res});

        // Se o cookie não existir, lançar um erro
        if (!token) {
            throw new Error('Invalid Token');
        }

        // Caso o cookie exista, vamos verificar se o token é verdadeiro
        // Se o token for falso, a função irá gerar um erro, levando para o "catch"
        checkToken(token);

        // Redirecionar para a tela inicial do sistema
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
            props: {}
        }
    }
    catch(err) {
        // Caso o token não exista ou seja inválido, isso vai acontecer
        return {
            props: {}
        }
    }
}