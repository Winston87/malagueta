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
exports.CreateOrdersServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateOrdersServices {
    execute({ table, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield prisma_1.default.order.create({
                data: {
                    table: table,
                    name: name
                },
                select: {
                    id: true,
                    table: true,
                    name: true,
                    status: true,
                    draft: true
                }
            });
            return orders;
        });
    }
    arrayTable({ table }) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderTable = yield prisma_1.default.order.findMany({
                where: {
                    table: table
                },
                select: {
                    id: true,
                    table: true,
                    status: true,
                    draft: true
                }
            });
            return orderTable;
        });
    }
    updatetable(table, ordem_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const upTable = yield prisma_1.default.order.update({
                where: {
                    id: ordem_id
                },
                data: {
                    table: table
                }
            });
            return upTable;
        });
    }
}
exports.CreateOrdersServices = CreateOrdersServices;
//# sourceMappingURL=CreateOrdersServices.js.map