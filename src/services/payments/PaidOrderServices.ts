import prismaClient from "../../prisma";
interface PaidOrder {

    order_id?: string,
}

class PaidOrderServices {

    async execute({order_id}: PaidOrder ) {
        await prismaClient.order.update({
            where: {
                id: order_id

            },
            data: {

                draft: true,
            },
            
        });


        const order = await prismaClient.order.findMany({

            where: {

                draft: false,

            },
            select: {
               
                id: true,
                table: true,

                item: {

                    where: {
                        order: {
                            draft: false,
                        },
                        preparation: true
                    },
                    select: {
                        product: true,
                        amount: true,
                        repor: {
                            
                            select: {
                                sales: true 
                                
                            }
                        },
                        
                    }
                }
            }
        })

        return order;
    }

    async getTable({order_id}: PaidOrder ) {

        const table = await prismaClient.order.findFirst({

            where: {
                id: order_id
            },
            select: {
                table: true
            }
        });

        return table;
    }

}


export { PaidOrderServices }
