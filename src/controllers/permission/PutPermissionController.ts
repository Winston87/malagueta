import { Request, Response } from "express";
import { PutPermissionServices } from "../../services/permission/PutPermissionServices";
import { GetValidPermissionServices } from "../../services/permission/GetValidPermissionServices"
import { Mensege, erros } from "../../exceptions/mensege/MensegeError"

class PutPermissionController {

    async handle(req: Request, res: Response) {

        const { permission_id, description } = req.body;

        const permissionServices = new PutPermissionServices();
        const validateServices = new GetValidPermissionServices();

        const validate = await validateServices.permission();
        const descriptionText = description;
        
        var existe = false;
        for(let i = 0 ; i < validate.length ; i++ ) {

            if(permission_id === validate[i].id && validate[i].description === 'ADMIN') {

                existe = true
            }
            if(String(descriptionText).toUpperCase() === validate[i].description) {

                existe = true
            }
        }

        if(existe === false) {

            const permission = await permissionServices.execute({
            permission_id,
            description
            });
            return res.status(204).json(permission);

        }else{

            throw new Mensege(erros.ATUALIZAÇÂO_NÂO_PERMITIDA);
        }


    }


}

export { PutPermissionController }


