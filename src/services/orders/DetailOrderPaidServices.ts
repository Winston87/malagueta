import prismaClient from "../../prisma";// detalhe pedido pago

interface DetailOrder {

    order_id: string
}
// class esta bug excluir 
class DetailOrderPaidServices {

    async execute({order_id}: DetailOrder) {

        const orders = await prismaClient.item.findMany({

            where: {
                
                ordem_id: order_id,
                order: {
                    status: true,
                    draft: true
                }    
            },
            select: {
    
                product: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        price: true,
                        banner: true

                    }
                },
                amount: true,
            },

        });

        return orders;
    }
}

export { DetailOrderPaidServices }
