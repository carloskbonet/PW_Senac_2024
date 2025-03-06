/* eslint-disable @typescript-eslint/no-unused-vars */
import { createMovie, findMovieByName } from "../model/movie";

export async function create(_name:string, _desc:string, _studio:string, _releaseDate:string, _streaming:string,
    _ageRating:string, _duration:string, _videoURL:string, _imgURL:string) {
    try{
        // Verificar situações que podem impedir a criação do filme (Exceto por dados escritos incorretamente)
        // Verificar se já existe um filme com esse "_name" cadastrado
        const movie = await findMovieByName(_name);

        if ( movie != undefined ) {
            return { status: 400, message: 'Movie name already registered' };
        }

        const response = await createMovie(_name, _desc, _studio, _releaseDate, _streaming, _ageRating, _duration, _videoURL, _imgURL);

        return { status: 201, message: 'Movie created', data: response };
    }
    catch(err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}


export async function findByName(_name:string){
    try {
        const movieByName = await findMovieByName(_name);

        // Verificar se o filme foi encontrado
        if ( movieByName == undefined ) {
            return { status: 404, message: "Movie not found" };
        }

        return { status: 200, message: "Movie found", data: movieByName };

    }
    catch(err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}