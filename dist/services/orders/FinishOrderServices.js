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
exports.FinishOrderServices = void 0;
const prisma_1 = __importDefault(require("../../prisma")); //finalizar pedido em preparo na cozinha
class FinishOrderServices {
    exeute({ order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderItemId = yield prisma_1.default.order.update({
                where: {
                    id: order_id,
                },
                data: {
                    status: true,
                },
                // select: {
                //     id: true,
                //     table: true,
                //     itens: {
                //         where: {
                //             preparation: false
                //         },
                //         select: {
                //             id: true,
                //             product: true,
                //             amount: true
                //         }
                //     }
                // }
            });
            const itens = yield prisma_1.default.order.findMany({
                where: {
                    itens: {
                        some: {
                            preparation: false
                        }
                    }
                },
                select: {
                    id: true,
                    table: true,
                    itens: {
                        where: {
                            preparation: false
                        },
                        select: {
                            id: true,
                            product: true,
                            amount: true
                        }
                    }
                }
            });
            return itens;
        });
    }
}
exports.FinishOrderServices = FinishOrderServices;
//# sourceMappingURL=FinishOrderServices.js.map