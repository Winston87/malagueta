import prismaClient from "../../prisma";

interface ReporItemRemove {

    item_id: string
}

class RemoveRepor {

    async execute({item_id}:ReporItemRemove ) {

        const remove = await prismaClient.commission.delete({

            where: {
                id: item_id

            }

        });

        return remove;
    }
}

export { RemoveRepor }

