import { Request, Response } from "express";
import { CancelPaymentsOrderServices } from "../../services/payments/CancelPaymentsOrderServices";
import { PaidOrderServices } from "../../services/payments/PaidOrderServices"
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices"

class CancelpaymentsOrderController {

    async handle(req: Request, res: Response ) {

        const { order_id } = req.body

        const cancelOrderServices = new CancelPaymentsOrderServices();

        const paidOrderServices = new PaidOrderServices();
        const tableServices = new CreateOrdersServices();

        const table = await paidOrderServices.getTable({order_id});

        // colocar pedido pago ou cencelado na tela de pedidos pago
        const order = await paidOrderServices.execute({
            order_id,
        });

        await tableServices.updatetable(
    
            order_id,
            table.table + 100
        );// fimm


            // cancela pedido 
        var id: string
        table.repor.forEach((reporId) => {

            id = reporId.id
            cancelOrderServices.execute({id});
        });
       
        
        return res.status(201).json(order);
    }
}

export { CancelpaymentsOrderController }