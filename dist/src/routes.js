"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//user
const CreateUserController_1 = require("./controllers/users/CreateUserController");
const AuthUserAdminController_1 = require("./controllers/users/AuthUserAdminController");
const AuthUserCollboratorController_1 = require("./controllers/users/AuthUserCollboratorController");
const DetailUserController_1 = require("./controllers/users/DetailUserController");
const PutUserController_1 = require("./controllers/users/PutUserController");
const ListUserController_1 = require("./controllers/users/ListUserController");
//permission
const CreatePermissionController_1 = require("./controllers/permission/CreatePermissionController");
const ListPermissionController_1 = require("./controllers/permission/ListPermissionController");
const DeletetPermissionController_1 = require("./controllers/permission/DeletetPermissionController");
//validar acesso via token
const ValidAuthenticated_1 = require("./middleware/ValidAuthenticated");
//category
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
//product
const CreateProductsController_1 = require("./controllers/products/CreateProductsController");
const ListProductCategoryController_1 = require("./controllers/products/ListProductCategoryController");
const PutProductController_1 = require("./controllers/products/PutProductController");
const GetProductsController_1 = require("./controllers/products/GetProductsController");
const RemoveProductsController_1 = require("./controllers/products/RemoveProductsController");
// comission
//order
const CreateOrdersController_1 = require("./controllers/orders/CreateOrdersController");
const RemoveOrdersController_1 = require("./controllers/orders/RemoveOrdersController");
const AddItemOrdersController_1 = require("./controllers/orders/AddItemOrdersController");
const RemoveItemController_1 = require("./controllers/orders/RemoveItemController");
const PutOrderSubmitController_1 = require("./controllers/orders/PutOrderSubmitController");
const ListOrderPreparationController_1 = require("./controllers/orders/ListOrderPreparationController");
const DetailOrderPaidController_1 = require("./controllers/orders/DetailOrderPaidController");
const FinishOrderController_1 = require("./controllers/orders/FinishOrderController");
const PutOrderItemController_1 = require("./controllers/orders/PutOrderItemController");
//report
const GetPaymentsOrderNotPaidController_1 = require("./controllers/relatorio/GetPaymentsOrderNotPaidController");
const GetPaymentsOrderPaidController_1 = require("./controllers/relatorio/GetPaymentsOrderPaidController");
const PaidOrderController_1 = require("./controllers/relatorio/PaidOrderController");
//menu
const MenuController_1 = require("./controllers/menu/MenuController");
const ListMenuController_1 = require("./controllers/menu/ListMenuController");
const UploadMenuContreoller_1 = require("./controllers/menu/UploadMenuContreoller");
//files
const multer_2 = __importDefault(require("./imgConfig/multer"));
const router = (0, express_1.Router)();
exports.router = router;
// configuração para salvar files
const foto = (0, multer_1.default)(multer_2.default.upload("imgBanner")); // local da pasta para salvar
const menu = (0, multer_1.default)(multer_2.default.upload("imgMenu"));
// rotas user
router.post('/users', new CreateUserController_1.CreatUserController().handle); // cadastrar usuario
router.post('/session', new AuthUserAdminController_1.AuthUserAdminController().handle); // login usuario
router.post('/session/collaborator', new AuthUserCollboratorController_1.AuthUserCollaboratorController().handle); // login garcon
router.get('/detail', ValidAuthenticated_1.ValidAuth, new DetailUserController_1.DetailUserController().handle); // detalhe usuario
router.put('/user/update', ValidAuthenticated_1.ValidAuth, new PutUserController_1.PutUserController().handle); // atualizar user
router.get('/user/list', ValidAuthenticated_1.ValidAuth, new ListUserController_1.ListUserController().handle); // listar user
//permission
router.post('/permission', new CreatePermissionController_1.CreatePermissionController().handle); // criar permissao
router.get('/permission/list', ValidAuthenticated_1.ValidAuth, new ListPermissionController_1.ListPermissionController().handle);
router.delete('/permission/delete', ValidAuthenticated_1.ValidAuth, new DeletetPermissionController_1.DeletetPermissionController().handle);
//rotas category
router.post('/category', ValidAuthenticated_1.ValidAuth, new CreateCategoryController_1.CreateCategoryController().handle); // cadastrar categoria
router.get('/categorys/list', ValidAuthenticated_1.ValidAuth, new ListCategoryController_1.ListCategoryController().handle); // listar categoria
//rotas product
router.post('/product', ValidAuthenticated_1.ValidAuth, foto.single('file'), new CreateProductsController_1.CreateProductsController().handle); // cadastrar categoria
router.get('/category/products', ValidAuthenticated_1.ValidAuth, new ListProductCategoryController_1.ListProductCategoryController().handle); // listar categoria
router.get('/product/list', ValidAuthenticated_1.ValidAuth, new GetProductsController_1.GetProductsController().handle); // buscar produtos
router.delete('/product/remove', ValidAuthenticated_1.ValidAuth, new RemoveProductsController_1.RemoveProductsController().handle); // buscar produtos
router.put('/product/update', foto.single('file'), ValidAuthenticated_1.ValidAuth, new PutProductController_1.PutProductController().handle); // atualizar um produto
//rotas orders
router.post('/order', ValidAuthenticated_1.ValidAuth, new CreateOrdersController_1.CreateOrdersController().handle); // abrir pedido mesa
router.delete('/order/remover/table', ValidAuthenticated_1.ValidAuth, new RemoveOrdersController_1.RemoveOrdersController().handle); // deletar mesa
router.post('/order/add', ValidAuthenticated_1.ValidAuth, new AddItemOrdersController_1.AddItemController().handle); // add um item a mesa
router.delete('/order/remover/item', ValidAuthenticated_1.ValidAuth, new RemoveItemController_1.RemoveItemController().handle); // deletar um item da mesa
router.put('/order/make', ValidAuthenticated_1.ValidAuth, new PutOrderSubmitController_1.PutOrderSubmitController().handle); // enviar pedido
router.get('/order/listAll', ValidAuthenticated_1.ValidAuth, new ListOrderPreparationController_1.ListOrderPreparationController().handle); // listar pedidos feitos nao pagos
router.get('/order/detail', ValidAuthenticated_1.ValidAuth, new DetailOrderPaidController_1.DetailOrderPaidController().handler); // detalhe do pedido pago*
router.put('/order/finish', ValidAuthenticated_1.ValidAuth, new FinishOrderController_1.FinishOrderController().handler); // libera mesa pedido pago (baixa do valor total da mesa )
router.put('/order/item', ValidAuthenticated_1.ValidAuth, new PutOrderItemController_1.PutOrderItemController().handle); // atualizar quantidade do item no pedido
//relatorio
router.get('/report/payment', new GetPaymentsOrderNotPaidController_1.GetPaymentsOrderNotPaidController().handle);
router.get('/report/paid', new GetPaymentsOrderPaidController_1.GetPaymentsOrderPaidController().handle);
router.put('/report', new PaidOrderController_1.PaidOrderController().handle);
// rota menu
router.get('/menu', new MenuController_1.MenuController().handle); // visualizar cardapio
router.get('/menu/product', new ListMenuController_1.ListMenuController().handle); //
router.post('/menu/upload', ValidAuthenticated_1.ValidAuth, menu.single('file'), new UploadMenuContreoller_1.UploadMenuController().handle); // subie um cardapio pdf para o servidor
