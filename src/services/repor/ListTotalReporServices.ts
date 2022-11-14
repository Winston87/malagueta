import { Prisma } from '.prisma/client';
import prismaClient from "../../prisma";


class ListTotalReporServices {

    async execute() {

        const repor = prismaClient.$queryRaw(Prisma.sql
            `select produtos.id, produtos.name, produtos.price, sum(relatorio.amount) as amount, sum(relatorio.sales) total_sale, relatorio.created_at
            from produtos inner join itens on produtos.id = itens.product_id
            inner join relatorio on itens.id = relatorio.item_id
            group by produtos.id, produtos.name, produtos.price, relatorio.created_at`);
    
    return repor;
    
    }

}

//terminar
export { ListTotalReporServices }