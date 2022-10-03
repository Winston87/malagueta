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




        return orders;

    }
}

export { ListOrderPreparationService }

