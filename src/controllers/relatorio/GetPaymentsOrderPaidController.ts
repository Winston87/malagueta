import { Request, Response } from "express";
import { GetPaymentsOrderPaidServices } from "../../services/relatorio/GetPaymentsOrderPaidServices";

class GetPaymentsOrderPaidController {

    async handle(req: Request, res: Response) {

        const paymentServices = new GetPaymentsOrderPaidServices();

        const payment = await paymentServices.execute();


        return res.status(200).json(payment);
    }


}
 export { GetPaymentsOrderPaidController }