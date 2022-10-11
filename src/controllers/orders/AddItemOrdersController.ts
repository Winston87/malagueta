import { Request, Response } from "express";
import { AddItemOrdersServices } from "../../services/orders/AddItemOrdersServices";
import { CreateCommissionServices } from "../../services/commission/CreateCommissionServices";


class AddItemController {

    async handle(req: Request, res: Response) {

        const {  ordem_id, product_id, amount, preparation } = req.body;
        const user_id = req.user_id;

        const addItemServices = new AddItemOrdersServices();
        const commissionServices = new CreateCommissionServices();

        //const getAll = await addItemServices.get(ordem_id);
        
        const itens = await addItemServices.execute({

            ordem_id,
            product_id,
            amount,
            preparation: false

        });

        

        // adicionar venda na comissao
        let sum = (parseFloat( itens.product.price) * amount);
        let sum_commission = ((5.8 * sum) / 100);

        await commissionServices.execute({
            item_id: itens.id,
            user_id: user_id,
            amount: itens.amount,
            price: itens.product.price,
            sales: sum

        });

        //146e4e2d-6a6f-428c-bccc-d2b30a55f3b7"

        const response = {
            itens,
            commission: sum_commission
        }

         return res.status(201).json(response);


    }
}

export { AddItemController }
