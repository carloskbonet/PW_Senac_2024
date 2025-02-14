/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../controller/UserController";
import { userRequest } from "@/request/userRequest";

export default async ( req:NextApiRequest , res:NextApiResponse ) => {

    // Methods: GET, POST, PUT, DELETE
    //          Read, Create, Update, Delete

    if ( req.method != 'POST' ) {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Receber os dados do front-end
    // Os dados são extraidos do "Body"
    const { name , email , password , confirmPassword } = req.body;

    // Aplicar o tratamento de dados (Request)
    const checkRequest = userRequest(name, email, password);

    if ( checkRequest.response == false ) {
        return res.status(403).json({ message: checkRequest.message });
    }

    // Passar os dados para o controller

    const response = await createUser(email, password, confirmPassword, name);

    return res.status(response.status).json({ message: response.message, data: response.data });
}