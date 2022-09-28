import { json, Request, Response } from "express";
import { AuthUserServie } from "../../services/users/authUserService";
import { GetValidPermissionServices } from "../../services/permission/GetValidPermissionServices";
import { erros, Mensege } from "../../exceptions/mensege/MensegeError"

class AuthUserAdminController {

    async handle(req: Request , res: Response) {

       const { email, password } = req.body;

       const authUserService = new AuthUserServie();
       const permissionServices = new GetValidPermissionServices();

       const auth = await authUserService.execute({
           email, password
       });

       const permission = await permissionServices.execute();

       if(auth.permission_id !== permission.id) {

        throw new  Mensege(erros.USUARIO_NAO_PERMITIDO);

       }


       return res.json(auth);
    }

}

export { AuthUserAdminController }



