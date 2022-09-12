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
exports.DeletetPermissionController = void 0;
const DeletePermissionServices_1 = require("../../services/permission/DeletePermissionServices");
class DeletetPermissionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idd } = req.body;
            const permissionServices = new DeletePermissionServices_1.DeletePermissionServices();
            const permission = yield permissionServices.execute({ idd });
            return res.json(permission);
        });
    }
}
exports.DeletetPermissionController = DeletetPermissionController;
