"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentsOrderNotPaidController = void 0;
const GetPaymentsOrderNotPaidServices_1 = require("../../services/payments/GetPaymentsOrderNotPaidServices");
class GetPaymentsOrderNotPaidController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentsServces = new GetPaymentsOrderNotPaidServices_1.GetPaymentsOrderNotPaidServices();
            const paymentsNotPaid = yield paymentsServces.execute();
            return res.status(200).json(paymentsNotPaid);
        });
    }
}
exports.GetPaymentsOrderNotPaidController = GetPaymentsOrderNotPaidController;
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
//# sourceMappingURL=GetPaymentsOrderNotPaidController.js.map