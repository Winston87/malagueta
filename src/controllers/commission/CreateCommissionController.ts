import { Request, Response } from "express";
import { CreateComissionServices } from "../../services/commission/CreateCommissionServices";
import { DateFormat } from "../../dataFormat/date"

class CreateCommissionController {

    async handle(req: Request, res: Response) {

        const { valor } = req.body;

        const commissionServices = new CreateComissionServices();
        const dataFormat = new DateFormat();
        const date = await dataFormat.data();

        const commission = await commissionServices.execute({
            valor,
            creatd_at: date
        });

        return res.status(201).json(commission);
    }

}

export { CreateCommissionController }
