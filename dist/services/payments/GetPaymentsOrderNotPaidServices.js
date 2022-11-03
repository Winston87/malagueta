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
exports.GetPaymentsOrderNotPaidServices = void 0;
const prisma_1 = __importDefault(require("../../prisma")); // listar pedido nao pagos 
class GetPaymentsOrderNotPaidServices {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield prisma_1.default.order.findMany({
                where: {
                    draft: false,
                    item: {
                        every: {
                            preparation: true
                        }
                    }
                },
                select: {
                    id: true,
                    table: true,
                    item: {
                        where: {
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
            //     const query = await prismaClient.$queryRaw(Prisma.sql
            //         `select sum(relatorio.sales) as valor_total 
            //          from relatorio
            //          where relatorio.order_id = ${order_id} `)
            //    const valueOrder = {
            //          order,
            //          query
            //    }
            return order;
        });
    }
}
exports.GetPaymentsOrderNotPaidServices = GetPaymentsOrderNotPaidServices;
//# sourceMappingURL=GetPaymentsOrderNotPaidServices.js.map