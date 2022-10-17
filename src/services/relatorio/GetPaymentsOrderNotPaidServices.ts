import { Prisma, PrismaClient } from '.prisma/client';
import prismaClient from "../../prisma";// listar pedido nao pagos 

class GetPaymentsOrderNotPaidServices {

    async execute() {

        const paiment = await prismaClient.order.findMany({

            where: {
                
                //status: true,
               draft:false,
                itens: {
                    some: {
                        preparation: true
                    }
                }
                
               
            },
            select: {
                id: true,
                table: true,
                draft: true,
                itens: {
                    
                    select: {
                        product: true,
                        amount: true

                    }
                }
            }
            

            

        });
        //const query = await prismaClient.$queryRaw(Prisma.sql`SELECT pedidos.id,itens.id as item_id,  pedidos.table, pedidos.status, pedidos.draft, pedidos.name, produtos.name, produtos.price, produtos.description, produtos.banner,itens.amount  FROM pedidos, itens, produtos`)

        //const query = await prismaClient.$queryRaw(Prisma.sql('SELECT pedidos.id, table, status, draft, pedidos.name, itens.id as item_id, produtos.id as produtos_id, produtos.name, produtos.price, produtos.description, produtos.banner, produtos.category_id, itens.amount FROM pedidos, itens, produtos'));

        return paiment;
        


    }

}

export { GetPaymentsOrderNotPaidServices }