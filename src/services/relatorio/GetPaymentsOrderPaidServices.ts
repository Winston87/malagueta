import prismaClient from "../../prisma";

class GetPaymentsOrderPaidServices {

    async execute() {

        const paymentPaid = prismaClient.order.findMany({

            where: {
                status: true,
                draft: true,

                itens: {
                    some: {
                        preparation: true
                    }
                }

                
            },
            select: {
                table: true,
                itens: {
                    select: {
                        product: true,
                        amount: true
                    }
                }
            }
        });
        return paymentPaid;
    }


}


export { GetPaymentsOrderPaidServices }
