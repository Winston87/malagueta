import prismaClient from "../../prisma";

interface DeletePermission {

    idd: string
}

class DeletePermissionServices {

    async execute({idd}:DeletePermission) {

        const permission = await prismaClient.permission.delete({

            where: {

                id: idd
                
            }
        });

        return permission;
    }
}

export { DeletePermissionServices }
