/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { create } from "../../controller/RatingController";
import { ratingRequest } from "@/request/ratingRequest";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { value, message, movieName, email } = req.body;

    // Aplicar o tratamento de dados (Request)
    const checkRequest = ratingRequest(value, message);

    if (checkRequest.response == false) {
        return res.status(403).json({ message: checkRequest.message });
    }

    const response = await create(value, message, movieName, email);

    return res.status(response.status).json({ message: response.message, data: response.data });
}