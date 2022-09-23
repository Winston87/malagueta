import { Request, Response } from "express";
import { AuthUserServie } from "../../services/users/authUserService";

class AuthUserCollaboratorController {

    async handle(req: Request , res: Response) {

       const { email, password } = req.body;

       const authUserService = new AuthUserServie();

       const auth = await authUserService.execute({
           email, password
       });

       return res.status(201).json(auth);
    }

}

export { AuthUserCollaboratorController }


