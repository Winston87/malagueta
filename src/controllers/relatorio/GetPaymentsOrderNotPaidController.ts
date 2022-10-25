import { Request, Response } from "express";
import { values } from "pdf-lib";
import { GetPaymentsOrderNotPaidServices } from "../../services/relatorio/GetPaymentsOrderNotPaidServices";

class GetPaymentsOrderNotPaidController {

    async handle(req: Request, res: Response) {



        const  order_id  = req.query.order_id as string

        const paymentsServces = new GetPaymentsOrderNotPaidServices();

        const paymentsNotPaid = await paymentsServces.execute();
        

        return res.status(200).json(paymentsNotPaid);
    }

}

export { GetPaymentsOrderNotPaidController }

