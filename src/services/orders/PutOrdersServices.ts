import prismaClient from "../../prisma";
// salvar um pedido em rascunho
interface PutOrder {

    ordem_id: string
}

class PutOrdersServices {

    async execute({ordem_id}: PutOrder ) {

        const order = prismaClient.order.update({
            where: {
                id: ordem_id
            },
            data: {

                draft: false
            }

        });

        return order;
    }

}

export { PutOrdersServices }
