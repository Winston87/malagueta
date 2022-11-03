import { Prisma, PrismaClient } from '.prisma/client';
import prismaClient from "../../prisma";// listar pedido nao pagos 

class GetPaymentsOrderNotPaidServices {

    async execute() {

        const order = await prismaClient.order.findMany({

            where: {

                draft: false,
                item: {
                    every: {
                        preparation: true
                    }
                }

            },
            select: {
               
                id: true,
                table: true,
                item: {

                    where: {
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
        });

    //     const query = await prismaClient.$queryRaw(Prisma.sql
    //         `select sum(relatorio.sales) as valor_total 
    //          from relatorio
    //          where relatorio.order_id = ${order_id} `)

    //    const valueOrder = {
    //          order,
    //          query
         
    //    }
    
       
        return order;
        


    }

}

export { GetPaymentsOrderNotPaidServices }