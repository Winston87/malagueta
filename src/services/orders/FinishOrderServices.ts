import prismaClient from "../../prisma";// finalizar mesa para paga

interface FinishOrder {

    order_id: string
}

class FinishOrderServices {

    async exeute({order_id}: FinishOrder) {

        const orders = await prismaClient.order.update({

            where: {
                id: order_id
                
            },
            data: {
                status: true
            }
        });

        return orders;


    }
}


export{ FinishOrderServices }

