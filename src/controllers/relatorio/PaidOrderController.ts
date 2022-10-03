// deletar uma mesa
import { Request, Response } from "express";
import { PaidOrderServices } from "../../services/relatorio/PaidOrderServices"

class PaidOrderController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;
        const paidOrderServices = new PaidOrderServices();

        const paymentOrder = await paidOrderServices.execute({
            order_id

        });

        return res.status(201).json(paymentOrder);


    }
}

export {  PaidOrderController }
