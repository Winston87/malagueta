import prismaClient from "../../prisma"; //finalizar pedido em preparo na cozinha

interface FinishOrder {

    order_id: string
}

class FinishOrderServices {

    async exeute({order_id}: FinishOrder) {

        const orderItemId =  await prismaClient.order.update({

            where: {
                id: order_id,
                
    
            },
            data: {
                status: true,
                
            },
            // select: {
            //     id: true,
            //     table: true,
            //     itens: {
            //         where: {
            //             preparation: false
            //         },
                    
            //         select: {
            //             id: true,
            //             product: true,
            //             amount: true

            //         }
            //     }
            // }
            

        });

        const itens = await prismaClient.order.findMany({

            
            where: {
                
                item: {
                    some: {
                        preparation: false
                    }
                }

            },
            select: {
                id: true,
                table: true,
                item: {
                    where: {
                        preparation: false
                    },
                    
                    select: {
                        id: true,
                        product: true,
                        amount: true

                    }
                }
            }
            
        });

           return itens;

    }

    
}


export{ FinishOrderServices }

