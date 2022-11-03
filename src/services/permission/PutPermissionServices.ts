import prismaClient from "../../prisma";

interface updatePermission {

    permission_id: string
    description: string
}

class PutPermissionServices {

    async execute({permission_id, description}:updatePermission) {

        const permission = await prismaClient.permission.update({
            where: {
                id: permission_id
                
            },
            data: {
                description: description.toUpperCase()
            }
        });

        return permission;
    }
}

export { PutPermissionServices }
