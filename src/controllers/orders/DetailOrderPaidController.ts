import { Request, Response } from "express";
import { DetailOrderPaidServices } from "../../services/orders/DetailOrderPaidServices";

class DetailOrderPaidController {

    async handler(req: Request, res: Response) {

        const order_id = req.query.order_id as string;

        const ordersServices = new DetailOrderPaidServices();

        const listDetail = await ordersServices.execute({
            order_id
        });

        return res.status(200).json(listDetail);

    }
}

export { DetailOrderPaidController }

