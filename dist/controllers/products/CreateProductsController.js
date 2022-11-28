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
exports.CreateProductsController = void 0;
const CreateProductsServices_1 = require("../../services/products/CreateProductsServices");
const MensegeError_1 = require("../../exceptions/mensege/MensegeError");
class CreateProductsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, description, category_id } = req.body;
            const productServices = new CreateProductsServices_1.CreateProductsServices();
            const { originalname, filename: banner } = req.file;
            if (req.file.path.substr(-5) !== '.jpeg' && req.file.path.substr(-4) !== '.png') {
                throw new MensegeError_1.Mensege(MensegeError_1.erros.FALHA_SALVA_IMAGEM);
            }
            else {
                // tranforma ponto em virgula
                let preco;
                if (!isNaN(parseInt(price)) && price.split(',').length < 3) {
                    if (price.includes(",")) {
                        preco = price.replace(",", ".");
                    }
                }
                const product = yield productServices.execute({
                    name,
                    price: preco,
                    description,
                    banner,
                    category_id,
                });
                return res.status(201).json(product);
            }
        });
    }
}
exports.CreateProductsController = CreateProductsController;
//# sourceMappingURL=CreateProductsController.js.map