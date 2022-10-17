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
                name: name
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

    async getTable({table}: CreateOrder) {

        const getTable = await prismaClient.order.findFirst({

            where: {
                table: table
            },
           
            select:{
                id: true,
                table: true
            }
        });
        return getTable;

    }

    async updatetable(table: number, ordem_id: string) {

        const upTable = await prismaClient.order.update({
           
            where: {
                id: ordem_id
            },
            data: {
                table: 0 + table
            }
        });

        return upTable;
    }
}

export { CreateOrdersServices }
