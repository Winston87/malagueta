import { Request, Response } from "express";
import { CreatePermissionServices } from "../../services/permission/CreatePermissionSevices";
import { GetValidPermissionServices } from "../../services/permission/GetValidPermissionServices"
import { Mensege, erros } from "../../exceptions/mensege/MensegeError"

class CreatePermissionController {

    async handle(req: Request, res: Response) {

        const { description } = req.body;

        const permissionServices = new CreatePermissionServices();
        const permissionServicesExiste = new GetValidPermissionServices();

        const validate = await permissionServicesExiste.execute();

        if(description === 'admin' || description === validate.description){

            throw new Mensege(erros.NAO_PERMITIDO + description)
        }else{

            const permission = await permissionServices.execute({
                description
            });
            return res.status(201).json(permission);
        }

    }
}

export { CreatePermissionController }
