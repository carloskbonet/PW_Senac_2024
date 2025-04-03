/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from "@/db";

export async function createMovie(_name:string, _desc:string, _studio:string, _releaseDate:string, _streaming:string,
    _ageRating:string, _duration:string, _videoURL:string, _imgURL:string)
{
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
            imgURL: _imgURL
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
            ratings: true
        }
    });

    return movie;
}


export async function selectMovies() {
    const movies = await prisma.movie.findMany();

    return movies;
}