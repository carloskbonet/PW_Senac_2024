/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { findByName } from "../../controller/MovieController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // Método permitido
    if (req.method != 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Receber os dados do front-end
    const { name } = req.query;

    // Passar os dados para o controller
    const response = await findByName(name as string);

    // Resposta para o front-end
    return res.status(response.status).json({ message: response.message, data: response.data });
}