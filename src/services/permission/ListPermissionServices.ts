import prismaClient from "../../prisma";

class ListPermissionServices {

    async execute() {

        const permission = await prismaClient.permission.findMany({

            select: {

                id: true,
                description: true
            }
        });

        return permission;
    }
}

export { ListPermissionServices }
