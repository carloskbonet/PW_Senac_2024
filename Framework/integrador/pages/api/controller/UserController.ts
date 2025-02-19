import { createUser, findUserByEmail, findUserLogin } from "../model/user";

export async function create(_email:string, _password:string, _confirmPassword:string, _name = "") {
    try {
        // Verificação de senhas
        if ( _password != _confirmPassword ) {
            return { status: 400, message: 'Passwords dont match' };
        }

        // Verificar email (Unique)
        const userByEmail = await findUserByEmail(_email);

        if ( userByEmail != undefined ) { // Se o usuário for diferente de undefined, o email já está cadastrado
            return { status: 400, message: 'Email already registered' }
        }

        // Criação do usuário

        const response = await createUser(_name, _email, _password);

        return { status: 201, message: 'User registered', data: response };
    }
    catch (err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}

export async function login(_email:string, _password:string) {
    try {
        // Encontrar o usuário
        const userLogin = await findUserLogin(_email, _password);

        // Verificar se o usuário foi encontrado
        if ( userLogin == undefined ) {
            return { status: 404, message: 'Incorrect email or password' };
        }
        else{
            // Deu certo, o usuário poderá fazer Login
            return { status: 200, message: 'Logged In' };
        }
    }
    catch (err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}