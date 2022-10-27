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
class AddItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ordem_id, product_id, amount } = req.body;
            /**adicionar item a mesa */
            const addItemServices = new AddItemOrdersServices_1.AddItemOrdersServices();
            const itens = yield addItemServices.execute({
                ordem_id,
                product_id,
                amount,
                preparation: false
            });
            return res.status(201).json(itens);
        });
    }
}
exports.AddItemController = AddItemController;
//# sourceMappingURL=AddItemOrdersController.js.map