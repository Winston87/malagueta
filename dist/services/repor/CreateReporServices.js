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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReporServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateReporServices {
    execute({ item_id, user_id, amount, price, sales, order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repor = prisma_1.default.repor.create({
                data: {
                    id: item_id,
                    user_id: user_id,
                    amount: amount,
                    price: price,
                    sales: sales,
                    order_id: order_id,
                    item_id: item_id,
                },
                select: {
                    id: true,
                    amount: true,
                    price: true,
                    sales: true,
                    order_id: true,
                    user_id: true,
                    created_at: true
                }
            });
            return repor;
        });
    }
}
exports.CreateReporServices = CreateReporServices;
//# sourceMappingURL=CreateReporServices.js.map