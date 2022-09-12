import { Request, Response } from "express";
import { DeletePermissionServices } from "../../services/permission/DeletePermissionServices";

class DeletetPermissionController {

    async handle(req: Request, res: Response) {

        const { idd } = req.body

        const permissionServices = new DeletePermissionServices();
        const permission = await permissionServices.execute({idd});

        return res.json(permission);
    }


}

export { DeletetPermissionController }

