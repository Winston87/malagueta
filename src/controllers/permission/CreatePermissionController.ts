import { Request, Response } from "express";
import { CreatePermissionServices } from "../../services/permission/CreatePermissionSevices";
import { GetValidPermissionServices } from "../../services/permission/GetValidPermissionServices"
import { Mensege, erros } from "../../exceptions/mensege/MensegeError"

class CreatePermissionController {

    async handle(req: Request, res: Response) {

        const { description } = req.body;

        const permissionServices = new CreatePermissionServices();
        const permissionServicesExiste = new GetValidPermissionServices();

        const validate = await permissionServicesExiste.permission();

        const descriptionText = description ;

        var existe = false;
        for(let i = 0 ; i < validate.length ; i++ ) {

            if(String(descriptionText).toUpperCase() === validate[i].description ) {
                existe = true
            }
        }

        if(existe === false) {

            const permission =  permissionServices.execute({
                description
            });
            
            return res.status(201).json(permission);
    
           
        }else{
                    
            throw new Mensege(erros.NAO_PERMITIDO + description)
    
        }

    }
}

export { CreatePermissionController }
