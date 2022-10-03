import { Request, Response } from "express";
import { AddItemOrdersServices } from "../../services/orders/AddItemOrdersServices";
import { CreateCommissionServices } from "../../services/commission/CreateCommissionServices";


class AddItemController {

    async handle(req: Request, res: Response) {

        const {  ordem_id, product_id, amount } = req.body;
        const user_id = req.user_id;

        const addItemServices = new AddItemOrdersServices();
        const commissionServices = new CreateCommissionServices();

        //const getAll = await addItemServices.get(ordem_id);
        
        const itens = await addItemServices.execute({

            ordem_id,
            product_id,
            amount// (getAll.ordem_id === ordem_id && getAll.product_id === product_id) ?  getAll.amount += amount: amount

        });

        

        // adicionar venda na comissao
        let sum = (parseFloat( itens.product.price) * amount);
        let sum_commission = ((5.8 * sum) / 100);

        await commissionServices.execute({
            item_id: itens.id,
            user_id,
            amount,
            price: itens.product.price,
            sales: sum

        });

        const response = {
            itens,
            commission: sum_commission
        }

         return res.status(201).json(response);


    }
}

export { AddItemController }
