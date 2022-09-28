import { Request, Response } from "express";
import { CreateProductsServices } from "../../services/products/CreateProductsServices";
import { Mensege, erros } from "../../exceptions/mensege/MensegeError";


class CreateProductsController {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body;
        const productServices = new CreateProductsServices();
        const { originalname, filename: banner } = req.file;

        if(req.file.path.substr(-5) !== '.jpeg' && req.file.path.substr(-4) !== '.png') {

            throw new Mensege(erros.FALHA_SALVA_IMAGEM);

        }else{

            const product = await productServices.execute({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.status(201).json(product);
        }

    }

}

export { CreateProductsController }

