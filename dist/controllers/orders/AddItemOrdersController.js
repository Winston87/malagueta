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
exports.AddItemController = void 0;
const AddItemOrdersServices_1 = require("../../services/orders/AddItemOrdersServices");
const CreateCommissionServices_1 = require("../../services/commission/CreateCommissionServices");
const CreateOrdersServices_1 = require("../../services/orders/CreateOrdersServices");
class AddItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ordem_id, product_id, amount, table } = req.body;
            const user_id = req.user_id;
            const addItemServices = new AddItemOrdersServices_1.AddItemOrdersServices();
            const commissionServices = new CreateCommissionServices_1.CreateCommissionServices();
            const tableServices = new CreateOrdersServices_1.CreateOrdersServices();
            const getTable = yield tableServices.getTable({ table });
            if (getTable.table === table) {
                createId(getTable.id);
            }
            else {
                createId(ordem_id);
            }
            function createId(ordem_id) {
                return __awaiter(this, void 0, void 0, function* () {
                    const itens = yield addItemServices.execute({
                        ordem_id: ordem_id,
                        product_id,
                        amount,
                        preparation: false
                    });
                    let sum = (parseFloat(itens.product.price) * amount);
                    let sum_commission = ((5.8 * sum) / 100);
                    yield commissionServices.execute({
                        item_id: itens.id,
                        user_id: user_id,
                        amount: itens.amount,
                        price: itens.product.price,
                        sales: sum
                    });
                    const response = {
                        itens,
                        commission: sum_commission
                    };
                    return res.status(201).json(response);
                });
            }
        });
    }
}
exports.AddItemController = AddItemController;
//# sourceMappingURL=AddItemOrdersController.js.map