// deletar uma mesa
import { Request, Response } from "express";
import { PutOrderSubmitServices } from "../../services/orders/PutOrderSubmitServices";

class PutOrderSubmitController {

    async handle(req: Request, res: Response) {

        const { ordem_id } = req.body;
        const orderServices = new PutOrderSubmitServices();

        const putOrder = await orderServices.execute({
            ordem_id

        });

        return res.status(201).json(putOrder);


    }
}

export {  PutOrderSubmitController }
