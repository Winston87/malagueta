import prismaClient from "../../prisma";

interface PutCategory {
     category_id: string
     name: string

}
class PutCategoryServices {

    async execute({category_id, name}: PutCategory) {

        const category = prismaClient.category.update({
            where: {
                id: category_id

            },
            data: {
                name: name
            }
        });



        return category;

    }

}

export { PutCategoryServices }
