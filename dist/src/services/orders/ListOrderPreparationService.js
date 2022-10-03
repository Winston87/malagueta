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
exports.ListOrderPreparationService = void 0;
const prisma_1 = __importDefault(require("../../prisma")); // listar pedidos para ser preparado na cozinha
class ListOrderPreparationService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield prisma_1.default.item.findMany({
                where: {
                    preparation: false,
                    NOT: {
                        preparation: true
                    }
                },
                select: {
                    id: true,
                    order: true,
                    product: true,
                    amount: true
                }
            });
            // const query = await prismaClient.$queryRaw(Prisma.sql`SELECT pedidos.id,itens.id as item_id, 
            // pedidos.table, pedidos.status, pedidos.draft, pedidos.name, produtos.name, produtos.price, 
            // produtos.description, produtos.banner,itens.amount  FROM pedidos, itens, produtos WHERE preparation NOT IN (${true}) AND preparation = false`)
            return orders;
        });
    }
}
exports.ListOrderPreparationService = ListOrderPreparationService;
