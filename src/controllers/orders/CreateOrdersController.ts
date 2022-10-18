// abrir mesa
import { Request, Response } from "express";
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices";

class CreateOrdersController {

    async handle(req: Request, res: Response) {

        const { table, name } = req.body;

        const ordersServices = new CreateOrdersServices();

        const tableExiste = await ordersServices.arrayTable({table});

        if(!tableExiste.length) {

            const orders = await ordersServices.execute({

                table,
                name
    
            });

            return res.status(201).json(orders);
            
        }else{ 

            return res.status(201).json(tableExiste);

        }
    }
}

export { CreateOrdersController }

