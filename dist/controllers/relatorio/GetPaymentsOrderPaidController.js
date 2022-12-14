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
exports.GetPaymentsOrderPaidController = void 0;
const GetPaymentsOrderPaidServices_1 = require("../../services/relatorio/GetPaymentsOrderPaidServices");
class GetPaymentsOrderPaidController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentServices = new GetPaymentsOrderPaidServices_1.GetPaymentsOrderPaidServices();
            const payment = yield paymentServices.execute();
            return res.status(200).json(payment);
        });
    }
}
exports.GetPaymentsOrderPaidController = GetPaymentsOrderPaidController;
//# sourceMappingURL=GetPaymentsOrderPaidController.js.map