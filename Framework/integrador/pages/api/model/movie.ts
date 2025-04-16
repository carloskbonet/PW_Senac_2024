/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/db";

export async function createMovie(_name:string, _desc:string, _studio:string, _releaseDate:string, _streaming:string,
    _ageRating:string, _duration:string, _videoURL:string, _imgURL:string, _genres:Array<number>)
{
    const connectedGenres: Array<any> = [];

    _genres.map( genreId => (
        connectedGenres.push(
            {
                id: genreId
            }
        )
    ));

    const movie = await prisma.movie.create({
        data: {
            name: _name,
            description: _desc,
            studio: _studio,
            releaseDate: _releaseDate,
            streaming: _streaming,
            ageRating: _ageRating,
            duration: _duration,
            videoURL: _videoURL,
            imgURL: _imgURL,
            genres: {
                connect: connectedGenres
            }
        }
    });

    return movie;
}

export async function findMovieByName(_name:string) {
    const movie = await prisma.movie.findUnique({
        where: {
            name: _name
        },
        include: {
            ratings: {
                include: {
                    user: true
                }
            }
        }
    });

    return movie;
}


export async function selectMovies() {
    const movies = await prisma.movie.findMany();

    return movies;
}