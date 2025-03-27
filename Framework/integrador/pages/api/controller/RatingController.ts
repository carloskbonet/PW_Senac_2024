import { createRating, findRating } from "../model/rating";
import { findUserByEmail } from "../model/user";
import { findMovieByName } from "../model/movie";

export async function create(_value:number, _comment:string, _movieName:string, _email:string) {
    try {
        const movieByName = await findMovieByName(_movieName);

        if ( movieByName == undefined ) {
            return { status: 404, message: 'Movie not found' };
        }

        const userByEmail = await findUserByEmail(_email);

        if (userByEmail == undefined) {
            return { status: 404, message: 'User not found' };
        }

        const ratingByUserAndMovie = await findRating(userByEmail.id , movieByName.id);

        if ( ratingByUserAndMovie != undefined ) {
            return { status: 400, message: 'Rating already exist' };
        }

        const response = await createRating(_value, _comment, userByEmail.id , movieByName.id );

        return { status: 201, message: 'Rating created', data: response };
    }
    catch(err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}
