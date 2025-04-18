import { prisma } from "@/db";

// Create
export async function createUser(_name:string, _email:string , _password:string) {

    const user = await prisma.user.create({
        data: {
            name: _name,
            email: _email,
            password: _password
        }
    });

    return user;
}

// Read
export async function findUserByEmail(_email:string) {

    const user = await prisma.user.findUnique({
        where: {
            email: _email
        }
    });

    return user;
}

export async function findUserLogin(_email:string , _password:string) {
    const user = await prisma.user.findUnique({
        where: {
            email: _email,
            password: _password
        }
    });

    return user;
}

// Update


// Delete