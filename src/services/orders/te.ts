import prismaClient from "../../prisma";

class ts {

    async ec() {

        const tt = await prismaClient.item.findMany({

            where: {
                


                
            }
        })
    }
}