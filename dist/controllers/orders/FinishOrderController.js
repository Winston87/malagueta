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
exports.FinishOrderController = void 0;
const FinishOrderServices_1 = require("../../services/orders/FinishOrderServices");
const FinishOrderPreparationServices_1 = require("../../services/orders/FinishOrderPreparationServices");
const CreateReporServices_1 = require("../../services/repor/CreateReporServices");
const GetItemServices_1 = require("../../services/orders/GetItemServices");
// requisição para liberar um item na cozinha informando que o produto esta pronto
class FinishOrderController {
    handler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id, item_id } = req.body;
            const user_id = req.user_id;
            const ordersServices = new FinishOrderServices_1.FinishOrderServices();
            const preparationServices = new FinishOrderPreparationServices_1.FinishOrderPreparationServices();
            const reporServices = new CreateReporServices_1.CreateReporServices();
            const itemServices = new GetItemServices_1.GetItemServices();
            // busca uma mesa e um  item 
            const itens = yield itemServices.itemExecute({
                order_id,
                item_id
            });
            /** metado de salvar venda em relatorio apos preparado  */ // --- inicio
            let sum = (parseFloat(itens.product.price) * itens.amount);
            yield reporServices.execute({
                item_id: item_id,
                user_id: user_id,
                amount: itens.amount,
                price: itens.product.price,
                sales: sum,
                order_id: order_id
            }); // --- fim
            /** pega um item que esta para preparo na cozinha e seta ela como produto preparado */ // -- inicio
            yield preparationServices.execute({
                item_id
            });
            // busca uma mesa existente e retorna a mesa com seus itens caso existe algo na mesa
            const order = yield ordersServices.exeute({
                order_id
            });
            if (order.length) {
                return res.status(200).json(order);
            }
            else {
                return res.status(200).end();
            } // --- fim
        });
    }
}
exports.FinishOrderController = FinishOrderController;
//# sourceMappingURL=FinishOrderController.js.map