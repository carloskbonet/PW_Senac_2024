/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../controller/GenreController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // Método permitido
    if (req.method != 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Passar os dados para o controller
    const response = await select();

    // Resposta para o front-end
    return res.status(response.status).json({ message: response.message, data: response.data });
}