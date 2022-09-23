import prismaClient from "../../prisma";

class ListUserServices {

    async execute() {

        const user =  prismaClient.user.findMany({

            select: {
                id: true,
                name: true,
                email: true,
                permission_id: true

            }
        });
         return user;

    }

}

export { ListUserServices }