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
exports.ListTotalReporServices = void 0;
const client_1 = require(".prisma/client");
const prisma_1 = __importDefault(require("../../prisma"));
class ListTotalReporServices {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const repor = prisma_1.default.$queryRaw(client_1.Prisma.sql `select produtos.id, produtos.name, produtos.price, sum(relatorio.amount) as amount, sum(relatorio.sales) total_sale, relatorio.created_at
            from produtos inner join itens on produtos.id = itens.product_id
            inner join relatorio on itens.id = relatorio.item_id
            where pedidos.status = true
            and pedidos.draft = true 
            group by produtos.id, produtos.name, produtos.price, relatorio.created_at`);
            return repor;
        });
    }
}
exports.ListTotalReporServices = ListTotalReporServices;
// select produtos.id, produtos.name, produtos.price, sum(relatorio.amount) as amount, sum(relatorio.sales) total_sale, relatorio.created_at
// from produtos inner join itens on produtos.id = itens.product_id
// inner join relatorio on itens.id = relatorio.item_id
// and relatorio.created_at in('14/11/2022','0')
// group by produtos.id, produtos.name, produtos.price, relatorio.created_at
//# sourceMappingURL=ListTotalReporServices.js.map