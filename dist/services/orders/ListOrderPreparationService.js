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
            //     where: {
            //      preparation: false
            //     },
            //     select: {
            //        id: true,
            //         order: {
            //             select: {
            //                 id: true,
            //                 table: true
            //             }
            //         },
            //         product: {
            //             select: {
            //                 name: true,
            //                 description: true,
            //                 price: true,
            //                 banner: true
            //             }
            //         },
            //         amount: true
            //     }
            // });
            const itens = yield prisma_1.default.order.findMany({
                where: {
                    draft: false,
                    item: {
                        some: {
                            preparation: false
                        }
                    }
                },
                select: {
                    id: true,
                    table: true,
                    item: {
                        where: {
                            preparation: false
                        },
                        select: {
                            id: true,
                            product: true,
                            amount: true
                        }
                    }
                },
            });
            return itens;
        });
    }
}
exports.ListOrderPreparationService = ListOrderPreparationService;
//# sourceMappingURL=ListOrderPreparationService.js.map