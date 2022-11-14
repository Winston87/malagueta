import prismaClient from "../../prisma";// listar pedido nao pagos 

class GetPaymentsOrderNotPaidServices {

    async execute() {

        const order = await prismaClient.order.findMany({

            where: {

                draft: false,
                item: {
                    every: {
                        preparation: true
                    }
                }

            },
            select: {
               
                id: true,
                table: true,
                item: {


                    where: {
                        preparation: true,
                        
                    },
                    
                    select: {
                        
                        product: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                                price: true,
                                banner: true,
                                category_id: true
                            }
                        },
                        amount: true,
                        repor: {
                            
                            select: {
                                sales: true 
                                
                            }
                        },
                        
                    },
                    
                }
            }
        });

    


       
          
       
        return order ;
        


    }

}

export { GetPaymentsOrderNotPaidServices }


