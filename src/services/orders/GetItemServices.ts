import prismaClient from "../../prisma";

interface GetItem {

    item_id?: string
    order_id?: string
}

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
                product_id: true,
                product: {
                    select: {
                        price: true
                    }
                }
               
            }
        });

        return items;
    }


}

export { GetItemServices }