/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest , res:NextApiResponse) => {
    // Recebe os dados do Client e verifica se estão corretos.
    // Caso estejam corretos, podemos criar uma conta

    // Methods
    // GET , POST , PUT , DELETE

    if ( req.method != 'POST' ) {
        return res.status(403).json("Method not allowed");
    }

    // Variáveis
    const { username, email, password, confirmPassword } = req.body;

    // Verificações
    // Verificação de quantidade de caracteres
    if ( password.length < 6 ) {
        return res.status(400).json("Senha inválida");
    }


    if ( password == confirmPassword ) {
        return res.status(200).json("Senhas corretas.");
    }
    else {
        return res.status(403).json("As senhas não são iguais.");
    }
}