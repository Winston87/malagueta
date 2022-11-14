import { Request, Response } from "express";
import { CreateUserServices } from "../../services/users/CreateUserServices";
import { DateFormat } from "../../dataFormat/date"

class CreatUserController {

    async handle(req: Request, res: Response) {

        const { name, email,permission_id, password } = req.body; // recebendo requisição


        const userServices = new CreateUserServices();
        const dateFormat = new DateFormat();
        const date = await dateFormat.data();

        const user = await userServices.execute({ 
            name, 
            email, 
            permission_id, 
            password,
            created_at: date,
            updated_at: date
         });

        return res.status(201).json(user)
    }
}

export { CreatUserController }






