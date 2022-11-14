import prismaClient from "../../prisma";
interface PaidOrder {

    order_id: string,
    creatd_at: string
}

class PaidOrderServices {

    async execute({order_id, creatd_at}: PaidOrder ) {

        
        await prismaClient.order.update({
            where: {
                id: order_id

            },
            data: {

                draft: true,
                created_at: creatd_at
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


export { PaidOrderServices }
