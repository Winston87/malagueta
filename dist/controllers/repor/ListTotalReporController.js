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
exports.ListTotalReporController = void 0;
const ListTotalReporServices_1 = require("../../services/repor/ListTotalReporServices");
class ListTotalReporController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { created_at, created_fn } = req.body;
            const reporServices = new ListTotalReporServices_1.ListTotalReporServices();
            const repor = yield reporServices.execute({
                created_at, created_fn
            });
            //     const rt = [{name:'leo'}, {name:'caio'}, {name:'lisa', id: 3}, {name:'julio'}, {name:'lisa', id: 1},{name:'caio'} ]
            //     const args =  Array.from(rt);
            //     var name: string
            //     args.forEach((value, index) => {
            //         name = value.name
            //         console.log(index,value)
            //     });
            //     var id: number
            //     const valid = args.filter((value, index) => {
            //         id = index
            //         return  value.name === name
            //     })
            //     const total = valid.reduce((prev, current) => {
            //         return prev += current.id
            //     },0)
            // for(let i = 0 ; i < valid.length ; i++ ) {
            //     console.log(valid, `total id: ${total}`)
            // }
            return res.json(repor);
        });
    }
}
exports.ListTotalReporController = ListTotalReporController;
//# sourceMappingURL=ListTotalReporController.js.map