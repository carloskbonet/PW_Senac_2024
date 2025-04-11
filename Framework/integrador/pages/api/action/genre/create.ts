/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { create } from "../../controller/GenreController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // Método permitido
    if (req.method != 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Receber os dados do front-end
    const { name } = req.body;

    // Passar os dados para o controller
    const response = await create(name);

    // Resposta para o front-end
    return res.status(response.status).json({ message: response.message, data: response.data });
}