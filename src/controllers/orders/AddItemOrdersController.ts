import { Request, Response } from "express";
import { AddItemOrdersServices } from "../../services/orders/AddItemOrdersServices";

class AddItemController {

    async handle(req: Request, res: Response) {

        const {  ordem_id, product_id, amount} = req.body;

        /**adicionar item a mesa */
        const addItemServices = new AddItemOrdersServices();

            const itens = await addItemServices.execute({

                ordem_id,
                product_id,
                amount,
                preparation: false

            }); 

            return res.status(201).json(itens);
    }
        
    }

export { AddItemController }

