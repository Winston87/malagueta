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
exports.PutPermissionController = void 0;
const PutPermissionServices_1 = require("../../services/permission/PutPermissionServices");
const GetValidPermissionServices_1 = require("../../services/permission/GetValidPermissionServices");
const MensegeError_1 = require("../../exceptions/mensege/MensegeError");
class PutPermissionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { permission_id, description } = req.body;
            const permissionServices = new PutPermissionServices_1.PutPermissionServices();
            const validateServices = new GetValidPermissionServices_1.GetValidPermissionServices();
            const validate = yield validateServices.permission();
            const descriptionText = description;
            var existe = false;
            for (let i = 0; i < validate.length; i++) {
                if (permission_id === validate[i].id && validate[i].description === 'ADMIN') {
                    existe = true;
                }
                if (String(descriptionText).toUpperCase() === validate[i].description) {
                    existe = true;
                }
            }
            if (existe === false) {
                const permission = yield permissionServices.execute({
                    permission_id,
                    description
                });
                return res.status(204).json(permission);
            }
            else {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.ATUALIZAÇÂO_NÂO_PERMITIDA);
            }
        });
    }
}
exports.PutPermissionController = PutPermissionController;
//# sourceMappingURL=PutPermissionController.js.map