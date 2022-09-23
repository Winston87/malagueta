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
exports.ListPermissionController = void 0;
const ListPermissionServices_1 = require("../../services/permission/ListPermissionServices");
class ListPermissionController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const permissionServices = new ListPermissionServices_1.ListPermissionServices();
            const permission = yield permissionServices.execute();
            return res.status(200).json(permission);
        });
    }
}
exports.ListPermissionController = ListPermissionController;
