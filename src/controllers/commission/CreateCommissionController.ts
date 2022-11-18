import { Request, Response } from "express";
import { CreateComissionServices } from "../../services/commission/CreateCommissionServices";

class CreateCommissionController {

    async handle(req: Request, res: Response) {

        const { valor } = req.body;

        const commissionServices = new CreateComissionServices();

        const commission = await commissionServices.execute({
            valor,
        });

        return res.status(201).json(commission);
    }

}

export { CreateCommissionController }
