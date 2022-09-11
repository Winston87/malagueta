import { Request, Response } from "express";
import { DetailOrderServices } from "../../services/orders/DetailOrderServices";

class DetailOrderController {

    async handler(req: Request, res: Response) {

        const order_id = req.query.order_id as string

        const ordersServices = new DetailOrderServices();

        const listDetail = await ordersServices.execute({
            order_id
        });

        return res.json(listDetail);

    }
}

export { DetailOrderController }

