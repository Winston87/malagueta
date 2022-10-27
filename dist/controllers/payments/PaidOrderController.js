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
exports.PaidOrderController = void 0;
const PaidOrderServices_1 = require("../../services/payments/PaidOrderServices");
const CreateOrdersServices_1 = require("../../services/orders/CreateOrdersServices");
const CreateCommissionServices_1 = require("../../services/commission/CreateCommissionServices");
const GetItemServices_1 = require("../../services/orders/GetItemServices");
class PaidOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.body;
            const user_id = req.user_id;
            const paidOrderServices = new PaidOrderServices_1.PaidOrderServices();
            const tableServices = new CreateOrdersServices_1.CreateOrdersServices();
            const commissionServices = new CreateCommissionServices_1.CreateComissionServices();
            const itemServices = new GetItemServices_1.GetItemServices();
            /**pagar um pedido */ // ---  inicio
            const paymentOrder = yield paidOrderServices.execute({
                order_id
            });
            var table;
            yield tableServices.updatetable(table = 100 + paymentOrder.table, order_id); // fimm
            /**salvar comissao apos pagar pedido */ //--- inicio 
            const itens = itemServices.itemExecute({ order_id });
            const valorCommission = yield commissionServices.executeValor();
            let sum = (parseFloat((yield itens).product.price) * (yield itens).amount);
            let sum_commission = (valorCommission.valor * sum) / 100;
            yield commissionServices.createExecute({
                user_id: user_id,
                valor: valorCommission.valor,
                total: sum_commission,
                commission_id: valorCommission.id
            }); // ---- fim
            return res.status(201).json(paymentOrder);
        });
    }
}
exports.PaidOrderController = PaidOrderController;
//# sourceMappingURL=PaidOrderController.js.map