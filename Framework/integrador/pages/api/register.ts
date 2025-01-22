/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default async (req:NextApiRequest , res:NextApiResponse) => {

    // Recebe os dados do Client e verifica se estão corretos.
    // Caso estejam corretos, podemos criar uma conta

    const { username, email, password, confirmPassword } = req.body;

    if ( password == confirmPassword ) {
        return res.status(200).json("Senhas corretas.");
    }
    else {
        return res.status(403).json("As senhas não são iguais.");
    }
}