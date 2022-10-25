// abrir mesa
import { Request, Response } from "express";
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices";

class CreateOrdersController {

    async handle(req: Request, res: Response) {

        const { table, name } = req.body;

        const ordersServices = new CreateOrdersServices();

        const tableExiste = await ordersServices.arrayTable({table});

        if(!tableExiste.length) {

            const order = await ordersServices.execute({

                table,
                name,
                
    
            });

            var orders = {
                id: order.id,
                table: table,
                order: false
            }

            return res.status(201).json(orders);
            
        }else{ 

            const order = {

                id: tableExiste[0].id,
                table: tableExiste[0].table,
                order:true
                
            }

            return res.status(201).json(order);

        }

        
    }
}

export { CreateOrdersController }

