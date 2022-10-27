import { Prisma } from ".prisma/client";
import prismaClient from "../../prisma";

class GetPaymentsOrderPaidServices {

    async execute() {


        const paymentPaid = prismaClient.order.findMany({

            where: {
                status: true,
                draft: true,

                item: {
                    some: {
                        preparation: true
                    }
                } 
            },
            select: {
                table: true,
                created_at: true,
                item: {
                    
                    
                    select: {
                        
                        product: true,
                        amount: true
                    }

                }
            }
            
        });
       
    
       
        const query = await prismaClient.$queryRaw(Prisma.sql`select distinct pedidos.id, pedidos.table, pedidos.created_at, produtos.price , itens.amount
                                                                from pedidos , produtos , itens  where produtos.id = itens.product_id
                                                                and pedidos.id = 'fd3980c3-87cc-4b51-825f-dda1739c0df6'`);

        return paymentPaid;
    }


}


export { GetPaymentsOrderPaidServices }


// select sum(sales) as total from comissao


// select * from itens  where ordem_id = '08a42d89-299d-4e85-adbd-39e1cd03ab0d'



// select distinct pedidos.table, sum(itens.amount) as quantidade
// from pedidos inner join itens on pedidos.id = itens.ordem_id
// where pedidos.id = '08a42d89-299d-4e85-adbd-39e1cd03ab0d'
// group by pedidos.table