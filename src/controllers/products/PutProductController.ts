import { Request, Response } from "express";
import { PutProductServices } from "../../services/products/PutProductServices";
import { Mensege, erros } from "../../exceptions/mensege/MensegeError"

class PutProductController {

    async handle(req: Request, res: Response) {

        const {product_id, name, price, description, category_id } = req.body;

        const productServices = new PutProductServices();


        if(!req.file) {

            throw new Mensege(erros.FALHA_SALVA_IMAGEM);

        }else{

            const { originalname, filename: banner } = req.file;

            // tranforma ponto em virgula
            let preco: string
            if(!isNaN(parseInt(price)) && price.split(',').length < 3){
                if(price.includes(",")) {
                    preco = price.replace(",", ".");
                }
            }

            const product =  await productServices.execute({

                product_id,
                name,
                price: preco,
                description,
                banner,
                category_id

            });

            return res.status(201).json(product);
        }

    }

}

export { PutProductController }
