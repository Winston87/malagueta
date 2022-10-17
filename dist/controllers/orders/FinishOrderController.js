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
class FinishOrderController {
    handler(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id, item_id } = req.body;
            const ordersServices = new FinishOrderServices_1.FinishOrderServices();
            const preparationServices = new FinishOrderPreparationServices_1.FinishOrderPreparationServices();
            yield preparationServices.execute({
                item_id
            });
            const order = yield ordersServices.exeute({
                order_id
            });
            console.log(order.length);
            if (order.length) {
                return res.status(200).json(order);
            }
            else {
                return res.status(200).end();
            }
        });
    }
}
exports.FinishOrderController = FinishOrderController;
//# sourceMappingURL=FinishOrderController.js.map