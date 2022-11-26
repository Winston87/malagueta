import prismaClient from "../../prisma";

interface CreateReporOrder {

    item_id: string
    user_id: string
    amount: number
    price: string
    sales: number
    order_id: string
}

class CreateReporServices {

    async execute({item_id, user_id, amount , price, sales, order_id}: CreateReporOrder) {

        const repor = prismaClient.repor.create({

            data: {
                id:item_id,
                user_id: user_id,
                amount: amount,
                price: price,
                sales: sales,
                order_id: order_id,
                item_id: item_id,
                
            },
            select: {
                id:true,
                amount: true,
                price: true,
                sales: true,
                order_id: true,
                user_id: true,
                created_at: true
            }
        });

        return repor;
    }

}
export { CreateReporServices }
