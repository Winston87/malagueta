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
exports.GetPaymentsOrderPaidServices = void 0;
const client_1 = require(".prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class GetPaymentsOrderPaidServices {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentPaid = prisma_1.default.order.findMany({
                where: {
                    status: true,
                    draft: true,
                    item: {
                        some: {
                            preparation: true
                        }
                    }
                },
                select: {
                    table: true,
                    created_at: true,
                    item: {
                        select: {
                            product: true,
                            amount: true
                        }
                    }
                }
            });
            const query = yield prisma_1.default.$queryRaw(client_1.Prisma.sql `select distinct pedidos.id, pedidos.table, pedidos.created_at, produtos.price , itens.amount
                                                                from pedidos , produtos , itens  where produtos.id = itens.product_id
                                                                and pedidos.id = 'fd3980c3-87cc-4b51-825f-dda1739c0df6'`);
            return paymentPaid;
        });
    }
}
exports.GetPaymentsOrderPaidServices = GetPaymentsOrderPaidServices;
// select sum(sales) as total from comissao
// select * from itens  where ordem_id = '08a42d89-299d-4e85-adbd-39e1cd03ab0d'
// select distinct pedidos.table, sum(itens.amount) as quantidade
// from pedidos inner join itens on pedidos.id = itens.ordem_id
// where pedidos.id = '08a42d89-299d-4e85-adbd-39e1cd03ab0d'
// group by pedidos.table
//# sourceMappingURL=GetPaymentsOrderPaidServices.js.map