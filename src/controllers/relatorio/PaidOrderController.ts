// deletar uma mesa
import { Request, Response } from "express";
import { PaidOrderServices } from "../../services/relatorio/PaidOrderServices"
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices"

class PaidOrderController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;
        const paidOrderServices = new PaidOrderServices();
        const tableServices = new CreateOrdersServices();

        const paymentOrder = await paidOrderServices.execute({
            order_id

        });
        
        var table: number
        
        await tableServices.updatetable(
            table = 100 + paymentOrder.table,
            order_id
        );
        
        return res.status(201).json(paymentOrder);

    }
}

export {  PaidOrderController }
