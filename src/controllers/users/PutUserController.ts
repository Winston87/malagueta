import { Request, Response } from "express";
import { PutUserServices } from "../../services/users/PutUserServices"

class PutUserController {

    async handle(req: Request, res: Response) {

        const { user_id,  name, permission_id } = req.body;

        const userServices = new PutUserServices();

        const user = await userServices.execute({

            user_id: user_id,
            name,
            permission_id
        });

        return res.json(user);


    }


}

export { PutUserController }