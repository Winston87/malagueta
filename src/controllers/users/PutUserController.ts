import { Request, Response } from "express";
import { PutUserServices } from "../../services/users/PutUserServices"
import { hash } from 'bcryptjs'

class PutUserController {

    async handle(req: Request, res: Response) {

        const { user_id,  name, permission_id, password } = req.body;
        const userServices = new PutUserServices();

        if(password) {
            const passwordHash = await hash(password, 8);

           putUser(user_id, name, permission_id, passwordHash);
        }else{

           putUser(user_id, name, permission_id);
        }

        async function putUser(user_id: string, name?: string, permission_id?: string, password?: string) {

            const user = await  userServices.execute({

                user_id: user_id,
                name,
                permission_id,
                password: password
            });
            return res.status(201).json(user);

        }
        

    }


}

export { PutUserController }