import prismaClient from "../../prisma";


class ListPermissionServices {

    async execute() {

        const permission =  prismaClient.permission.findMany({

            select: {

                id: true,
                description: true
            }
        });

        console.log(permission)

        return permission;
        
    }
}

export { ListPermissionServices }
