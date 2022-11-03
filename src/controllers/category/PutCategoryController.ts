import { Request, Response } from "express";
import { PutCategoryServices } from "../../services/category/PutCategoryServices";

class PutCategoryController {

    async handle(req: Request, res: Response) {

        const { category_id, name } = req.body;

        const categoryServices = new PutCategoryServices();

        const category = await categoryServices.execute({
            category_id,
            name
        });

        return res.status(201).json(category);
    }


}

export { PutCategoryController }