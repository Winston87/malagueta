import prismaClient from "../../prisma";
interface PaidOrder {

    order_id: string
}

class PaidOrderServices {

    async execute({order_id}: PaidOrder ) {

        const order = prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {

                draft: true
            }

        });

        return order;
    }

}

export { PaidOrderServices }
