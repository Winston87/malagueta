import prismaClient from "../../prisma"; // listar pedidos para ser preparado na cozinha
import { Prisma } from '.prisma/client';


class ListOrderPreparationService {

    async execute() {

        const orders = await prismaClient.item.findMany({

            where: {
                preparation: false,
                NOT:{
                    preparation: true
                }
                
            },
            select: {
                id: true,
                order: true,
                product: true,
                amount: true
            }
            // select: {
                
            //     order: {
            //         select: {
            //             id: true,
            //             table: true,
            //             itens: {

            //                 select: {
            //                     id: true,
            //                     product: true,
            //                     amount: true
            //                 }
            //             }
            //         }
            //     }
            // }
               
           
        });

       
        // const query = await prismaClient.$queryRaw(Prisma.sql`SELECT pedidos.id,itens.id as item_id, 
        // pedidos.table, pedidos.status, pedidos.draft, pedidos.name, produtos.name, produtos.price, 
        // produtos.description, produtos.banner,itens.amount  FROM pedidos, itens, produtos WHERE preparation NOT IN (${true}) AND preparation = false`)



        return orders;

    }
}

export { ListOrderPreparationService }

