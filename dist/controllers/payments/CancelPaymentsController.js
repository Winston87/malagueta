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
exports.CancelpaymentsOrderController = void 0;
const CancelPaymentsOrderServices_1 = require("../../services/payments/CancelPaymentsOrderServices");
const PaidOrderServices_1 = require("../../services/payments/PaidOrderServices");
const CreateOrdersServices_1 = require("../../services/orders/CreateOrdersServices");
class CancelpaymentsOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id } = req.body;
            const cancelOrderServices = new CancelPaymentsOrderServices_1.CancelPaymentsOrderServices();
            const paidOrderServices = new PaidOrderServices_1.PaidOrderServices();
            const tableServices = new CreateOrdersServices_1.CreateOrdersServices();
            const table = yield paidOrderServices.getTable({ order_id });
            // colocar pedido pago ou cencelado na tela de pedidos pago
            yield paidOrderServices.execute({
                order_id,
            });
            yield tableServices.updatetable(order_id, table.table + 100); // fimm
            // cancela pedido 
            var id;
            table.repor.forEach((reporId) => {
                id = reporId.id;
                cancelOrderServices.execute({ id });
            });
            return res.status(201).send();
        });
    }
}
exports.CancelpaymentsOrderController = CancelpaymentsOrderController;
//# sourceMappingURL=CancelPaymentsController.js.map