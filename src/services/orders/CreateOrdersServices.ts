import  prismaClient  from "../../prisma";

interface CreateOrder {

    table?: number,
    name?: string
}

class CreateOrdersServices {

    async execute({table, name}: CreateOrder) {

        const orders = await prismaClient.order.create({

            data: {
                table: table,
                name: name,
                

            },
            select: {
                id: true,
                table: true,
                name: true,
                status: true,
                draft: true
            }
        });


        return orders;


    }

    // buscar mesas  para verificar se existe para atender ou para abri uma nova sem a repetir  
    async arrayTable({table}: CreateOrder) {

        const orderTable = await prismaClient.order.findMany({

            where: {

                table: table
            },
            select:{
                id: true,
                table: true,
                status: true,
                draft: true
            }
        });

        

        return orderTable;
    }

    // alterar a table do pedido de 100 + table
    async updatetable( ordem_id: string, table: number) {

        const upTable = await prismaClient.order.update({
           
            where: {
                id: ordem_id
            },
            data: {
                table: table
            }
        });

        return upTable;
    }
}

export { CreateOrdersServices }

