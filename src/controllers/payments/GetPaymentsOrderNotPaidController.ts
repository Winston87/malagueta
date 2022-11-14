
import { Request, Response } from "express";
import { GetPaymentsOrderNotPaidServices } from "../../services/payments/GetPaymentsOrderNotPaidServices";

class GetPaymentsOrderNotPaidController {

    async handle(req: Request, res: Response) {

        const paymentsServces = new GetPaymentsOrderNotPaidServices();
        const  paymentsNotPaid = await paymentsServces.execute();
                          
       return res.status(200).json(paymentsNotPaid);
    }

}

export { GetPaymentsOrderNotPaidController }



 // for(let i = 0 ; i < paymentsNotPaid.length ; i++ ) {

        //     const order = {
        //         id: paymentsNotPaid[i].id,
        //         table: paymentsNotPaid[i].table,
                
        //     }

        

        // for(let y = 0 ; y < paymentsNotPaid[y].item.length ; y++ ) {

        //     const item = [
        //         {
        //             id: paymentsNotPaid[y].item[y].product.id,
        //             name: paymentsNotPaid[y].item[y].product.name,
        //             description: paymentsNotPaid[y].item[y].product.description,
        //             price: paymentsNotPaid[y].item[y].product.price,
        //             banner: paymentsNotPaid[y].item[y].product.banner,
        //             category_id: paymentsNotPaid[y].item[y].product.category_id,
        //             amount: paymentsNotPaid[y].item[y].amount,
        //             total: (paymentsNotPaid[y].item[y].amount * parseFloat( paymentsNotPaid[y].item[y].product.price))
        //         }
        //     ]
        //     const teste = {

        //         order,
        //         item
        //     }

        //     console.log(teste)

            
        // }
