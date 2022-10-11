import { Request, Response } from "express";
import { ListPermissionServices } from "../../services/permission/ListPermissionServices"

class ListPermissionController {

    async handle(req: Request, res: Response) {

        const permissionServices = new ListPermissionServices();

        const permission = await permissionServices.execute();

        console.log(permission)

        return res.status(200).json(permission);
    }

}


export { ListPermissionController }