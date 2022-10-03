import { Request, Response } from "express";
import { GetPaymentsOrderNotPaidServices } from "../../services/relatorio/GetPaymentsOrderNotPaidServices";

class GetPaymentsOrderNotPaidController {

    async handle(req: Request, res: Response) {

        const paymentsServces = new GetPaymentsOrderNotPaidServices();

        const payments = await paymentsServces.execute();

        return res.status(200).json(payments);
    }

}

export { GetPaymentsOrderNotPaidController }