import prismaClient from "../../prisma";

class ListUserServices {

    async execute() {

        const user = await prismaClient.user.findMany({

            select: {
                id: true,
                name: true,
                email: true,
                permission_id: true,
                permission: true

            }
        });
         return user;

    }

}

export { ListUserServices }