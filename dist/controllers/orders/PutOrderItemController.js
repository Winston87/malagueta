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
exports.PutOrderItemController = void 0;
const PutOrderItemServices_1 = require("../../services/orders/PutOrderItemServices");
class PutOrderItemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const putItemServiices = new PutOrderItemServices_1.PutOrderItemService();
            const { item_id, amount } = req.body;
            const item = yield putItemServiices.execute({
                item_id,
                amount
            });
            return res.status(201).json(item);
        });
    }
}
exports.PutOrderItemController = PutOrderItemController;
//# sourceMappingURL=PutOrderItemController.js.map