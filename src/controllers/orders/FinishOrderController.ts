//liberar pedido para a mesa
import {  Request, Response } from "express";
import { FinishOrderServices } from "../../services/orders/FinishOrderServices";
import { FinishOrderPreparationServices } from "../../services/orders/FinishOrderPreparationServices"

class FinishOrderController {

    async handler(req:Request, res: Response) {

        const { order_id, item_id } = req.body;

        const ordersServices = new FinishOrderServices();
        const preparationServices = new FinishOrderPreparationServices();

        await preparationServices.execute({
                    item_id
                });

        const order = await ordersServices.exeute({

            order_id
        });

        console.log(order.length)
                 
       if(order.length ){
            return res.status(200).json(order);

       }else{

            return res.status(200).end();

       }

    }
}

export{ FinishOrderController }
