import { compare } from 'bcryptjs';
import prismaClient from "../../prisma";

interface AddItemOrders {

    ordem_id: string;
    product_id: string;
    preparation: boolean
    amount: number;
}

class AddItemOrdersServices {

    async execute({ ordem_id,preparation, product_id, amount }: AddItemOrders ) {


             const addItem = await prismaClient.item.create({


                data: {
                    ordem_id: ordem_id,
                    product_id: product_id,
                    preparation,
                    amount: amount

                },
                select: {
                    id: true,
                    amount: true,
                    ordem_id: true,
                    product: true,


                }
            });
            return addItem;


    }


}



export { AddItemOrdersServices }
