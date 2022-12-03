// cancelar um pedido
import prismaClient from "../../prisma";

interface CancelOrder {

    id?: string,
}

class CancelPaymentsOrderServices {

    async execute({id}: CancelOrder) {
    
        await prismaClient.repor.updateMany({

            where: {
                id: id

            },
            data: {

                sales: 0.00,

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

}

export {  CancelPaymentsOrderServices }