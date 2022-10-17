// abrir mesa
import { Request, Response } from "express";
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices";

class CreateOrdersController {

    async handle(req: Request, res: Response) {

        const { table, name } = req.body;

        const ordersProductServices = new CreateOrdersServices();

        

        const tableExiste = await ordersProductServices.arrayTable({table});
        console.log(tableExiste.length)

        if(!tableExiste.length) {
            const orders = await ordersProductServices.execute({

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

