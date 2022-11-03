import prismaClient from "../../prisma";

class GetValidPermissionServices {

    async execute() {
        const permissionAdmin = prismaClient.permission.findFirst({

            where: {
                description: 'ADMIN'
            }
        });
        return permissionAdmin;
    }

    async permission() {

        const description = await prismaClient.permission.findMany({

            select: {
                id: true,
                description: true
            }
        });
        return description;
    }

}


export { GetValidPermissionServices }
