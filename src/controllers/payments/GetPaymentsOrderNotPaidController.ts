import { Request, Response } from "express";
import { values } from "pdf-lib";
import { GetPaymentsOrderNotPaidServices } from "../../services/payments/GetPaymentsOrderNotPaidServices";

class GetPaymentsOrderNotPaidController {

    async handle(req: Request, res: Response) {

        const paymentsServces = new GetPaymentsOrderNotPaidServices();

        const paymentsNotPaid = await paymentsServces.execute();
                       
       return res.status(200).json(paymentsNotPaid);
    }

}

export { GetPaymentsOrderNotPaidController }

