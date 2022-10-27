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
exports.CreateComissionServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateComissionServices {
    execute({ valor }) {
        return __awaiter(this, void 0, void 0, function* () {
            const idCommission = yield prisma_1.default.valor_commission.findFirst({
                select: {
                    id: true
                }
            });
            if (!idCommission) {
                yield prisma_1.default.valor_commission.create({
                    data: {
                        valor: valor
                    },
                    select: {
                        valor: true
                    }
                });
            }
            else {
                yield prisma_1.default.valor_commission.update({
                    where: {
                        id: idCommission.id
                    },
                    data: {
                        valor: valor
                    }
                });
            }
        });
    }
    executeValor() {
        return __awaiter(this, void 0, void 0, function* () {
            const valorCommission = yield prisma_1.default.valor_commission.findFirst({
                select: {
                    id: true,
                    valor: true
                }
            });
            return valorCommission;
        });
    }
    createExecute({ user_id, valor, total, commission_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            create({ user_id, valor, total, commission_id });
        });
    }
}
exports.CreateComissionServices = CreateComissionServices;
function create({ user_id, valor, total, commission_id }) {
    return __awaiter(this, void 0, void 0, function* () {
        const commission = yield prisma_1.default.commission.create({
            data: {
                user_id: user_id,
                valor_commission: valor,
                total_commission: total,
                commission_id: commission_id
            },
            select: {
                id: true,
                user_id: true,
                valor_commission: true,
                total_commission: true,
                commission_id: true,
                creatd_at: true
            }
        });
        return commission;
    });
}
//# sourceMappingURL=CreateCommissionServices.js.map