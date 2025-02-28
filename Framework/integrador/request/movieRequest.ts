/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { minMaxLength } from "./check";

export function movieRequest(_name:any, _desc:any, _studio:any, _releaseDate:any, _streaming:any, _ageRating:any, _duration:any) {
    const streamingPlatforms = [ 'Netflix', 'Prime Video', 'Paramount', 'HBO Max', 'Disney+', 'Apple TV', 'Telecine', 'Crunchyroll' ];
    const ageRatings = [ '18', '16', '14', '12', '10', 'Livre' ];

    if ( !minMaxLength(_name, 3, 128))
        return { response: false, message: 'Invalid name' };

    if ( !minMaxLength(_desc, 0, 1024))
        return { response: false, message: 'Invalid description' };

    if ( !minMaxLength(_studio, 2, 128))
        return { response: false, message: 'Invalid studio' };

    // Verificar data de lançamento

    if ( !streamingPlatforms.includes(_streaming as string )) {
        return { response: false, message: 'Invalid streaming platform' };
    }

    if ( ageRatings.includes(_ageRating as string) == false ) {
        return { response: false, message: 'Invalid age rating' };
    }

    // Verificar duração

    // Caso todas as verificações retornem true
    return { response: true };
}