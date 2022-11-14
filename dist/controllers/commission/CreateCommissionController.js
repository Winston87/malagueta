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
exports.CreateCommissionController = void 0;
const CreateCommissionServices_1 = require("../../services/commission/CreateCommissionServices");
const date_1 = require("../../dataFormat/date");
class CreateCommissionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valor } = req.body;
            const commissionServices = new CreateCommissionServices_1.CreateComissionServices();
            const dataFormat = new date_1.DateFormat();
            const date = yield dataFormat.data();
            const commission = yield commissionServices.execute({
                valor,
                creatd_at: date
            });
            return res.status(201).json(commission);
        });
    }
}
exports.CreateCommissionController = CreateCommissionController;
//# sourceMappingURL=CreateCommissionController.js.map