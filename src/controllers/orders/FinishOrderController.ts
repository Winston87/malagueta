//liberar pedido para a mesa
import {  Request, Response } from "express";
import { FinishOrderServices } from "../../services/orders/FinishOrderServices";
import { FinishOrderPreparationServices } from "../../services/orders/FinishOrderPreparationServices"
import { CreateReporServices } from "../../services/repor/CreateReporServices";
import { GetItemServices } from "../../services/orders/GetItemServices"

// requisição para liberar um item na cozinha informando que o produto esta pronto
class FinishOrderController {

    async handler(req:Request, res: Response) {

        const { order_id, item_id } = req.body;
        const user_id = req.user_id;

        const ordersServices = new FinishOrderServices();
        const preparationServices = new FinishOrderPreparationServices();
        const reporServices = new CreateReporServices();
        const itemServices = new GetItemServices();


        // busca um item pela mesa e pelo id do item
        const itens = await itemServices.itemExecute({
            order_id,
            item_id
        });
  

        /** metado de salvar venda em relatorio apos preparado  */ // --- inicio
         let sum = (parseFloat(itens.product.price) * itens.amount);
         
         await reporServices.execute({
                item_id: item_id,
                user_id: user_id,
                amount: itens.amount,
                price: itens.product.price,
                sales: sum,
                order_id: order_id

        
        }); // --- fim


        /** pega um item que esta para preparo na cozinha e seta ela como produto preparado */ // -- inicio
        await preparationServices.execute({
            item_id
        });

        const order = await ordersServices.exeute({

            order_id
        });
                 
       if(order.length ){
            return res.status(200).json(order);

       }else{

            return res.status(200).end();

       }// --- fim

       
            
    }
}

export{ FinishOrderController }
