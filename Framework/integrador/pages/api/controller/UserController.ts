import { createUserModel } from "../model/user";

export async function createUser(_email:string, _password:string, _confirmPassword:string, _name = "") {
    try {
        // Verificação de senhas
        if ( _password != _confirmPassword ) {
            return { status: 400, message: 'Passwords dont match' };
        }

        // Verificar email (Unique)


        // Criação do usuário

        const response = await createUserModel(_name, _email, _password);

        return { status: 201, message: 'User registered', data: response };
    }
    catch (err) {
        return { status: 500, message: 'Something went wrong', data: err};
    }
}