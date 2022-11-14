// abrir mesa
import { Request, Response } from "express";
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices";
import { DateFormat } from "../../dataFormat/date"
/** classe de abrir uma mesa e verifica se ela existe e se estar aberta para fazer pedido caso false ela abre uma nova  */

class CreateOrdersController {

    async handle(req: Request, res: Response) {

        const { table, name } = req.body;

        const ordersServices = new CreateOrdersServices();
        const dateFormat = new DateFormat();
        const date = await dateFormat.data();

        const tableExiste = await ordersServices.arrayTable({table});

        if(!tableExiste.length) {

            const order = await ordersServices.execute({

                table,
                name,
                created_at: date
            });

            createOrder(order.id, table, false);
            
        }else{ 

            createOrder(tableExiste[0].id, tableExiste[0].table, true);

        }

        async function createOrder(id: string, table: number, order: boolean) {
        
            const orders = {

                id: id,
                table: table,
                order: order
            }

            return res.status(201).json(orders);
        }

        
    }

}


export { CreateOrdersController }

