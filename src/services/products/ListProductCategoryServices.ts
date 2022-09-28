import { Prisma } from ".prisma/client";
import prismaClient from "../../prisma";

interface ListProducts {

    category_id: string
}

class ListProductCategoryServices {

    async execute({category_id}: ListProducts) {

        const ProductsAll = prismaClient.product.findMany({

            where: {
                category_id: category_id

            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true
            }
        });




        //const query = await prismaClient.$queryRaw(Prisma.sql`SELECT name, price, description, banner FROM produtos WHERE category_id = ${category_id}`)

        //console.log(query)
        return (ProductsAll);

    }
}

export { ListProductCategoryServices }

