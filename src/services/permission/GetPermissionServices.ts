import prismaClient from "../../prisma";

class GetPermissionServices {

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

export { GetPermissionServices }
