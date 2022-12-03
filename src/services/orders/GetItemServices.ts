import prismaClient from "../../prisma";

interface GetItem {

    item_id?: string
    order_id?: string
}
// busca item pela id da mesa e do item
class GetItemServices {

    async itemExecute({order_id, item_id}: GetItem) {

        const items = await prismaClient.item.findFirst({
            where: {
                ordem_id: order_id,
                id: item_id

            },
            select: {

                id: true,
                amount: true,
                ordem_id: true,
                product_id: true,
                product: {
                    select: {
                        id: true,
                        price: true
                    }
                }
               
            }
        });

        return items;
    }

    async getItem({order_id}: GetItem) {

        const item =  await prismaClient.item.findMany({

            where: {
                id: order_id
            },
            select: {
                id: true,
                product: {
                    select: {
                        id: true,
                        name: true
                    }
                }
                
            }
        });

        return item;
    }


}

export { GetItemServices }