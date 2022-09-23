
import {  Request, Response } from "express";
import { GetProductsServices } from "../../services/products/GetProductsServices";

class GetProductsController {

    async handle(req:Request, res: Response ) {

        const productServices = new GetProductsServices();

        const product = await productServices.execute();

        return res.status(200).json(product);


    }


}

export { GetProductsController }
