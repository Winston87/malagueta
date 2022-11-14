import { getDate } from 'date-fns';
import { Request, Response } from "express";
import { ListTotalReporServices } from "../../services/repor/ListTotalReporServices";

class ListTotalReporController {

    async handle(req: Request, res: Response) {

        const reporServices = new ListTotalReporServices();

       

        const repor = await reporServices.execute();

        return res.json(repor);


    }


}

export { ListTotalReporController }