/* eslint-disable @typescript-eslint/no-explicit-any */

export function isEmail(_text:any) {
    // A exclamação representa negação
    if ( !isString(_text) ) {
        return false;
    }
    // Verificar se é um email
    const check = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return check.test(_text);
}

export function isString(_text:any) {
    if ( _text instanceof String || typeof _text === 'string' ) {
        return true;
    }
    else {
        return false;
    }
}


export function minMaxLength(_text:any, _min:number, _max:number) {
    if ( !isString(_text) ) {
        return false;
    }
    else{
        _text = String(_text);
    }

    // Verificar tamanho
    if ( _text.length >= _min && _text.length <= _max ) {
        return true;
    }
    else {
        return false;
    }
}