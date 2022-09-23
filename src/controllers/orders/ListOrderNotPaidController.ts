//listar pedidos feitos
import { Request, Response } from "express";
import { ListOrderNotPaidService } from "../../services/orders/ListOrderNotPaidServices"

class ListOrderNotPaidController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;

        const ordersServices = new ListOrderNotPaidService();

        const listAll = await ordersServices.execute();

        if(listAll === null) {
             return res.status(200).json('vazio')
        }

        return res.status(200).json(listAll) 
    }
}

export { ListOrderNotPaidController }

