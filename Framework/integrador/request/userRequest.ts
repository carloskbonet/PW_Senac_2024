/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmail, minMaxLength } from "./check";

export function userRequest(_name:any, _email:any, _password:any) {
    // Testar individualmente cada valor
    
    if ( !isEmail(_email) ) 
        return { response: false, message: "Invalid Email" };

    if ( !minMaxLength(_name, 2, 32) || _name.length == 0 )
        return { response: false, message: 'Invalid name' };

    if ( !minMaxLength(_password, 8, 32))
        return { response: false, message: 'Invalid password' };


    // Caso todas as verificações retornem true
    return { response: true };
}