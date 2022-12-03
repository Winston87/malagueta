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
exports.CancelPaymentsOrderServices = void 0;
// cancelar um pedido
const prisma_1 = __importDefault(require("../../prisma"));
class CancelPaymentsOrderServices {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.repor.updateMany({
                where: {
                    id: id
                },
                data: {
                    sales: 0.00,
                },
            });
            const order = yield prisma_1.default.order.findMany({
                where: {
                    draft: false,
                },
                select: {
                    id: true,
                    table: true,
                    item: {
                        where: {
                            order: {
                                draft: false,
                            },
                            preparation: true
                        },
                        select: {
                            product: true,
                            amount: true,
                            repor: {
                                select: {
                                    sales: true
                                }
                            },
                        }
                    }
                }
            });
            return order;
        });
    }
}
exports.CancelPaymentsOrderServices = CancelPaymentsOrderServices;
//# sourceMappingURL=CancelPaymentsOrderServices.js.map