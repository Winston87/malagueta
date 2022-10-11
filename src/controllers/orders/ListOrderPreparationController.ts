//listar pedidos feitos
import { Request, Response } from "express";
import { ListOrderPreparationService } from "../../services/orders/ListOrderPreparationService"

class ListOrderPreparationController {

    async handle(req: Request, res: Response) {

        const ordersServices = new ListOrderPreparationService();

        const listAll = await ordersServices.execute();

        return res.status(200).json(listAll) 
    }
}

export { ListOrderPreparationController }


