import prismaClient from "../../prisma";


class ListPermissionServices {

    async execute() {

        const permission =  prismaClient.permission.findMany({

            select: {

                id: true,
                description: true
            }
        });

        return permission;
    }
}

export { ListPermissionServices }
