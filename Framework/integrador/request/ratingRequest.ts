/* eslint-disable @typescript-eslint/no-explicit-any */
import { minMaxLength } from "./check";

export function ratingRequest(_value:any, _message:any) {

    if ( _value < 1 || _value > 5 )
        return { response: false, message: 'Invalid value' };

    if ( !minMaxLength(_message, 0, 512) )
        return { response: false, message: 'Invalid message' };

    // Caso todas as verificações retornem true
    return { response: true };
}