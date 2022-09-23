import prismaClient from "../../prisma";


class ListOrderNotPaidService {

    async execute() {

        const orders = await prismaClient.order.findMany({

            where: {

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

