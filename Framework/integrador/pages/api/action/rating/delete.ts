/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { destroy } from "../../controller/RatingController";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'DELETE') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { movieName , email } = req.body;

    const response = await destroy(movieName, email);

    return res.status(response.status).json({ message: response.message, data: response.data });
}