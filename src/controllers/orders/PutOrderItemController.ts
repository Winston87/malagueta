//alterar quantidade de itens pedido
import { Request, Response } from "express";
import { PutOrderItemService } from "../../services/orders/PutOrderItemServices";

class PutOrderItemController {

    async handle(req: Request, res: Response) {

        const putItemServiices = new PutOrderItemService();
       
        const {item_id, amount } = req.body;

        const item = await putItemServiices.execute({

            item_id,
            amount

        });

        return res.status(201).json(item);

    }

}

export { PutOrderItemController }
