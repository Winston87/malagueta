import { Request, Response } from "express";
import { ListProductCategoryServices }  from "../../services/products/ListProductCategoryServices";

class ListProductCategoryController {

    async handle(req: Request, res: Response) {

        const category_id = req.query.category_id as string; // busca o id na query e afirma que este e uma string

        const categoryServices = new ListProductCategoryServices();

        const products = await categoryServices.execute({
            category_id
        });

        return res.status(200).json(products);


    }
}

export { ListProductCategoryController }



