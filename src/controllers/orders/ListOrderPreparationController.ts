//listar pedidos feitos
import { Request, Response } from "express";
import { ListOrderPreparationService } from "../../services/orders/ListOrderPreparationService"

class ListOrderPreparationController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;

        const ordersServices = new ListOrderPreparationService();

        const listAll = await ordersServices.execute();

        if(listAll === null) {
             return res.status(200).json('vazio')
        }

        return res.status(200).json(listAll) 
    }
}

export { ListOrderPreparationController }

