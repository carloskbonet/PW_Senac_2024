import { prisma } from "@/db";

// Create
export async function createUserModel(_name:string, _email:string , _password:string) {

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


// Update


// Delete