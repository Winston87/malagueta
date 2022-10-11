import prismaClient from "../../prisma";

interface PutPreparation {

    item_id: string
}

class FinishOrderPreparationServices {

    async execute({item_id}: PutPreparation) {
        
       const preparation =  await prismaClient.item.update({
    
            where: {
                id: item_id
            },
            data: {
                preparation: true
            }
         });

         return preparation;
    }
    



}

export { FinishOrderPreparationServices }