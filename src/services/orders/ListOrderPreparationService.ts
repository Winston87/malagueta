import { Item } from ".prisma/client";
import { CharCodes } from "pdf-lib";
import prismaClient from "../../prisma"; // listar pedidos para ser preparado na cozinha

class ListOrderPreparationService {

    async execute() {

        // const itens = await prismaClient.item.findMany({

        //     where: {
        //      preparation: false

        //     },
        //     select: {
        //        id: true,
        //         order: {
        //             select: {
        //                 id: true,
        //                 table: true
        //             }
        //         },
        //         product: {
        //             select: {
        //                 name: true,
        //                 description: true,
        //                 price: true,
        //                 banner: true
        //             }
        //         },
        //         amount: true
                        
        //     }
            
  
        // });
        
        
        const itens = await prismaClient.order.findMany({

            
            where: {
                
                itens: {
                    some: {
                        preparation: false
                    }
                }

            },
            select: {
                id: true,
                table: true,
                itens: {
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

export { ListOrderPreparationService }

