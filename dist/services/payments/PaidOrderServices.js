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
exports.PaidOrderServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class PaidOrderServices {
    execute({ order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.default.order.update({
                where: {
                    id: order_id
                },
                data: {
                    draft: true,
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
    getTable({ order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield prisma_1.default.order.findFirst({
                where: {
                    id: order_id
                },
                select: {
                    table: true,
                    repor: {
                        select: {
                            id: true
                        }
                    }
                }
            });
            return table;
        });
    }
}
exports.PaidOrderServices = PaidOrderServices;
//# sourceMappingURL=PaidOrderServices.js.map