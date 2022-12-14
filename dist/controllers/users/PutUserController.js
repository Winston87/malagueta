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
exports.PutUserController = void 0;
const PutUserServices_1 = require("../../services/users/PutUserServices");
const bcryptjs_1 = require("bcryptjs");
class PutUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user_id, name, permission_id, password } = req.body;
            const userServices = new PutUserServices_1.PutUserServices();
            if (password) {
                const passwordHash = yield (0, bcryptjs_1.hash)(password, 8);
                putUser(user_id, name, permission_id, passwordHash);
            }
            else {
                putUser(user_id, name, permission_id);
            }
            function putUser(user_id, name, permission_id, password) {
                return __awaiter(this, void 0, void 0, function* () {
                    const user = yield userServices.execute({
                        user_id: user_id,
                        name,
                        permission_id,
                        password: password
                    });
                    return res.status(201).json(user);
                });
            }
        });
    }
}
exports.PutUserController = PutUserController;
//# sourceMappingURL=PutUserController.js.map