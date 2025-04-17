/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    // Método permitido
    if (req.method != 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Receber os dados do front-end
    const { movieName, ratings } = req.body;

    // Formação do PROMPT
    const prompt = `Vou enviar uma lista de avaliações de usuário em relação a um filme. O nome do filme é: ${movieName}.
    Desconsidere qualquer pré-opinião sobre o filme. Considere apenas os comentários e avaliações listadas abaixo.
    A lista de avaliações seguirá o formato a seguir:
    "ratings": [
		{
			"id": 1,
			"value": 5,
			"comment": "muito bom"
        },
        {
			"id": 2,
			"value": 4,
			"comment": "bom, mas poderia ser melhor"
        }
    ]
    A lista acima é um exemplo, desconsidere-a durante a análise.
    Com base na próxima lista, considere "value" sendo a nota do usuário em relação ao filme (mínimo 1 e máximo 5).
    "comment" é o comentário do usuário em relação ao filme.
    Analise todas as notas e comentários dos usuários para, ao final, exibir apenas o seguinte resultado:
    Nota média do filme: (inserir média de todas as notas),
    Avaliação: (Analisar todos os comentários e descrever a opinião dos usuários (máximo de 500 caracteres))
    (Observação: Nunca exibir dados do usuário, apenas dados da avaliação).
    A lista de avaliações está logo abaixo:\n ${ratings}
    `;

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //model: 'mistralai/mistral-7b-instruct',
                model: 'openai/gpt-3.5-turbo',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ]
            })
        });
        
        if ( !response.ok ) {
            const err = await response.json();
            console.log(err);
            return res.status(500).json({ message: 'API Error', error: err });
        }

        const responseData = await response.json();

        // Resposta para o front-end
        return res.status(200).json({ message: "Success", data: responseData.choices[0].message.content });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}