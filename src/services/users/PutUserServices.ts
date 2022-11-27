import prismaClient from "../../prisma";

interface PutUser {

    user_id: string
    name?: string
    permission_id?: string,
    password?: string
}

class PutUserServices {

    async execute({user_id, name, permission_id, password}: PutUser) {

        const user = await prismaClient.user.update({

            where: {
                id: user_id
            },
            data: {
                 name: name.toUpperCase(),
                 permission_id: permission_id,
                 password: password
            },
            select: {
                name: true,
                email: true,
                permission: true

            }
        });
        
        return user;


    }


}

export { PutUserServices }