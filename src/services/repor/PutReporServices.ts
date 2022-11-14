import prismaClient from "../../prisma";

interface PutItemRepor {

    item_id: string
    amount: number
    sales: number

}

class PutReporServices {

    async execute({item_id, amount, sales}: PutItemRepor) {

        const item = prismaClient.repor.update({

            where: {
                id: item_id
            },
            data: {
                amount: amount,
                sales: sales
            }
        });


        return item ;

    }
}


export {PutReporServices}


