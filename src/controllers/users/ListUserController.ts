import { Request, Response } from "express";
import { ListUserServices }  from "../../services/users/ListUserServices";

class ListUserController {

    async handle(req: Request, res: Response) {

        const userServices = new ListUserServices();

        const user = await userServices.execute();

        return res.json(user);
    }


}


export { ListUserController }