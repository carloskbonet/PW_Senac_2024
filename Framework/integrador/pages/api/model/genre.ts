import { prisma } from "@/db"

export async function createGenre(_name:string) {
    const genre = await prisma.genre.create({
        data: {
            name: _name
        }
    });

    return genre;
}

export async function findGenreByName(_name:string) {
    const genre = await prisma.genre.findUnique({
        where: {
            name: _name
        }
    });

    return genre;
}