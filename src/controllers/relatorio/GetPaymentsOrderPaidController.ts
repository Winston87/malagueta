import { Request, Response } from "express";
import { GetPaymentsOrderPaidServices } from "../../services/relatorio/GetPaymentsOrderPaidServices";

class GetPaymentsOrderPaidController {

    async handle(req: Request, res: Response) {

        const paymentPaidServices = new GetPaymentsOrderPaidServices();

        const paymentPaid = await paymentPaidServices.execute();

        return res.status(200).json(paymentPaid);
    }


}
 export { GetPaymentsOrderPaidController }