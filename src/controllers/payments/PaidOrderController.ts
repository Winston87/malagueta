// deletar uma mesa
import { Request, Response } from "express";
import { PaidOrderServices } from "../../services/payments/PaidOrderServices"
import { CreateOrdersServices } from "../../services/orders/CreateOrdersServices"
import { CreateComissionServices } from "../../services/commission/CreateCommissionServices"
import { GetItemServices } from "../../services/orders/GetItemServices"
class PaidOrderController {

    async handle(req: Request, res: Response) {

        const { order_id } = req.body;
        const user_id = req.user_id;

        const paidOrderServices = new PaidOrderServices();
        const tableServices = new CreateOrdersServices();
        const commissionServices = new CreateComissionServices();
        const itemServices = new GetItemServices();

        /**pagar um pedido */  // ---  inicio
        const paymentOrder = await paidOrderServices.execute({
            order_id
        });
        
        var table: number
        await tableServices.updatetable(
            table + 100, //+ paymentOrder.table,
            order_id
        );// fimm

        

        /**salvar comissao apos pagar pedido */ //--- inicio 
        const itens = itemServices.itemExecute({order_id})

        const valorCommission = await commissionServices.executeValor();

        let sum = (parseFloat((await itens).product.price) * (await itens).amount);
        let sum_commission = (valorCommission.valor * sum) / 100;
        
        await commissionServices.createExecute({

            user_id: user_id,
            valor: valorCommission.valor,
            total: sum_commission,
            commission_id: valorCommission.id
        });// ---- fim

        return res.status(201).json(paymentOrder);

    }
}


export {  PaidOrderController }
