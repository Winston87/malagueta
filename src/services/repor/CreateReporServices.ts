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
                item_id: item_id
                
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

class DataItemRepor{
    async data({item_id}: any) {

        const dataItem = prismaClient.repor.findFirst({
            where: {
                id: item_id

            }
        });
    return dataItem;

    }
}
export { CreateReporServices, DataItemRepor }

// SELECT DISTINCT * FROM  itens WHERE ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'
// SELECT * FROM itens WHERE product_id = '9415daa1-550d-4893-a83b-bcedde21491c'

// SELECT price FROM produtos, itens WHERE ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'


// SELECT price FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'


// SELECT price, amount FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'

// SELECT SUM(amount) as qt FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'

// SELECT name, price, amount FROM produtos p  INNER JOIN itens c ON p.id = c.product_id
// WHERE c.ordem_id = 'f2a8253f-45c8-412f-a367-67c9ad60573d'
