import { Request, Response } from "express";
import { ListcategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryController {

    async handle(req: Request, res: Response) {

        const CategoriaServices = new ListcategoryServices();
        const categorias = await CategoriaServices.execute();

        return  res.status(200).json(categorias);


    }
}

export { ListCategoryController }
