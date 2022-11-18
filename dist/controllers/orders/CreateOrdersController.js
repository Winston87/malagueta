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
exports.CreateOrdersController = void 0;
const CreateOrdersServices_1 = require("../../services/orders/CreateOrdersServices");
/** classe de abrir uma mesa e verifica se ela existe e se estar aberta para fazer pedido caso false ela abre uma nova  */
class CreateOrdersController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { table, name } = req.body;
            const ordersServices = new CreateOrdersServices_1.CreateOrdersServices();
            const tableExiste = yield ordersServices.arrayTable({ table });
            if (!tableExiste.length) {
                const order = yield ordersServices.execute({
                    table,
                    name,
                });
                createOrder(order.id, table, false);
            }
            else {
                createOrder(tableExiste[0].id, tableExiste[0].table, true);
            }
            function createOrder(id, table, order) {
                return __awaiter(this, void 0, void 0, function* () {
                    const orders = {
                        id: id,
                        table: table,
                        order: order
                    };
                    return res.status(201).json(orders);
                });
            }
        });
    }
}
exports.CreateOrdersController = CreateOrdersController;
//# sourceMappingURL=CreateOrdersController.js.map