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
exports.CreateUserServices = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const Execeptions_1 = require("../../exceptions/users/Execeptions");
const bcryptjs_1 = require("bcryptjs");
class CreateUserServices {
    execute({ name, email, password, permission_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExcption = new Execeptions_1.InternalError();
            //validar campos
            yield userExcption.execute({ email, name, password });
            const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
            const salvarUser = yield prisma_1.default.user.create({
                data: {
                    name: name.toUpperCase(),
                    email: email.toLowerCase(),
                    permission_id: permission_id,
                    password: passwordHash,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    permission: true
                }
            });
            return salvarUser;
        });
    }
}
exports.CreateUserServices = CreateUserServices;
//# sourceMappingURL=CreateUserServices.js.map