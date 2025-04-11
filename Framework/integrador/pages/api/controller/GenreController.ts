import { createGenre, findGenreByName } from "../model/genre";


export async function create(_name:string) {
    try {
        // Verificar valores únicos
        const genreByName = await findGenreByName(_name);

        if (genreByName != undefined) {
            return { status: 400, message: 'Genre already registered' };
        }

        // Criar
        const response = await createGenre(_name);

        return { status: 201, message: 'Genre created', data: response };
    }
    catch(err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}