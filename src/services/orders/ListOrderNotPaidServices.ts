import prismaClient from "../../prisma";

interface GetTableOrder {

    table: number
}

class ListOrderNotPaidService {

    async execute({table}: GetTableOrder) {

        const orders = await prismaClient.order.findFirst({

            where: {

                table: table = 14,
                status: false,
                draft: false

            },
            include: {
               itens: {
                   select: {
                       product: true,
                       amount: true
                   }
               }
           }
        });

        return orders;

    }
}

export { ListOrderNotPaidService }

