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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatUserController = void 0;
const CreateUserServices_1 = require("../../services/users/CreateUserServices");
class CreatUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, permission_id, password } = req.body; // recebendo requisição
            const userServices = new CreateUserServices_1.CreateUserServices();
            const user = yield userServices.execute({ name, email, permission_id, password });
            return res.status(201).json(user);
        });
    }
}
exports.CreatUserController = CreatUserController;
//# sourceMappingURL=CreateUserController.js.map