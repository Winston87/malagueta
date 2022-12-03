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
exports.GetItemServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// busca item pela id da mesa e do item
class GetItemServices {
    itemExecute({ order_id, item_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield prisma_1.default.item.findFirst({
                where: {
                    ordem_id: order_id,
                    id: item_id
                },
                select: {
                    id: true,
                    amount: true,
                    ordem_id: true,
                    product_id: true,
                    product: {
                        select: {
                            id: true,
                            price: true
                        }
                    }
                }
            });
            return items;
        });
    }
    getItem({ order_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield prisma_1.default.item.findMany({
                where: {
                    id: order_id
                },
                select: {
                    id: true,
                    product: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            return item;
        });
    }
}
exports.GetItemServices = GetItemServices;
//# sourceMappingURL=GetItemServices.js.map