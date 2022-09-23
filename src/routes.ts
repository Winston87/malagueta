import { Router } from "express";
import multer from 'multer';

//user
import { CreatUserController } from "./controllers/users/CreateUserController";
import { AuthUserAdminController } from "./controllers/users/AuthUserAdminController";
import { AuthUserCollaboratorController } from "./controllers/users/AuthUserCollboratorController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { PutUserController } from "./controllers/users/PutUserController";
import { ListUserController } from "./controllers/users/ListUserController";

//permission
import { CreatePermissionController } from "./controllers/permission/CreatePermissionController";
import { ListPermissionController } from "./controllers/permission/ListPermissionController";
import { DeletetPermissionController} from "./controllers/permission/DeletetPermissionController"

//validar acesso via token
import { ValidAuth } from "./middleware/ValidAuthenticated";

//category
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

//product
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListProductCategoryController } from "./controllers/products/ListProductCategoryController";
import { PutProductController } from "./controllers/products/PutProductController";
import { GetProductsController } from "./controllers/products/GetProductsController";
import { RemoveProductsController } from "./controllers/products/RemoveProductsController";

// comission

//order
import { CreateOrdersController } from "./controllers/orders/CreateOrdersController";
import { RemoveOrdersController } from "./controllers/orders/RemoveOrdersController";
import { AddItemController } from "./controllers/orders/AddItemOrdersController";
import { RemoveItemController } from "./controllers/orders/RemoveItemController";
import { PutOrderSubmitController } from "./controllers/orders/PutOrderSubmitController";
import { ListOrderNotPaidController } from "./controllers/orders/ListOrderNotPaidController";
import { DetailOrderPaidController } from "./controllers/orders/DetailOrderPaidController";
import { FinishOrderController } from "./controllers/orders/FinishOrderController";
import { PutOrderItemController } from "./controllers/orders/PutOrderItemController";

//menu
import { MenuController } from "./controllers/menu/MenuController";
import { ListMenuController } from "./controllers/menu/ListMenuController";
import { UploadMenuController } from "./controllers/menu/UploadMenuContreoller";

//files
import upLoadConfig from './imgConfig/multer';

const router = Router();

// configuração para salvar files
const foto = multer(upLoadConfig.upload("imgBanner"));// local da pasta para salvar
const menu = multer(upLoadConfig.upload("imgMenu"));

// rotas user
router.post('/users', new CreatUserController().handle);// cadastrar usuario
router.post('/session', new AuthUserAdminController().handle);// login usuario
router.post('/session/collaborator', new AuthUserCollaboratorController().handle);// login garcon
router.get('/detail',ValidAuth, new DetailUserController().handle ); // detalhe usuario
router.put('/user/update', ValidAuth, new PutUserController().handle );// atualizar user
router.get('/user/list', ValidAuth, new ListUserController().handle);// listar user

//permission
router.post('/permission', new CreatePermissionController().handle); // criar permissao
router.get('/permission/list',ValidAuth, new ListPermissionController().handle)
router.delete('/permission/delete',ValidAuth, new DeletetPermissionController().handle);

//rotas category
router.post('/category',ValidAuth, new CreateCategoryController().handle); // cadastrar categoria
router.get('/categorys/list', ValidAuth, new ListCategoryController().handle); // listar categoria

//rotas product
router.post('/product', ValidAuth, foto.single('file'), new CreateProductsController().handle); // cadastrar categoria
router.get('/category/products',ValidAuth, new ListProductCategoryController().handle ); // listar categoria
router.get('/product/list' ,ValidAuth, new GetProductsController().handle);// buscar produtos
router.delete('/product/remove' ,ValidAuth, new RemoveProductsController().handle);// buscar produtos
router.put('/product/update',foto.single('file'),ValidAuth, new PutProductController().handle); // atualizar um produto


//rotas orders
router.post('/order', ValidAuth, new CreateOrdersController().handle); // abrir pedido mesa
router.delete('/order/remover/table', ValidAuth, new RemoveOrdersController().handle ); // deletar mesa
router.post('/order/add', ValidAuth, new AddItemController().handle);  // add um item a mesa
router.delete('/order/remover/item', ValidAuth, new RemoveItemController().handle); // deletar um item da mesa
router.put('/order/make', ValidAuth, new PutOrderSubmitController().handle );  // enviar pedido
router.get('/order/listAll', ValidAuth, new ListOrderNotPaidController().handle); // listar pedidos feitos nao pagos
router.get('/order/detail', ValidAuth, new  DetailOrderPaidController().handler); // detalhe do pedido pago*
router.put('/order/finish', ValidAuth, new FinishOrderController().handler); // libera mesa pedido pago (baixa do valor total da mesa )
router.put('/order/item',ValidAuth, new PutOrderItemController().handle);// atualizar quantidade do item no pedido



// rota menu
router.get('/menu', new MenuController().handle); // visualizar cardapio
router.get('/menu/product', new ListMenuController().handle); //
router.post('/menu/upload',ValidAuth, menu.single('file'), new UploadMenuController().handle); // subie um cardapio pdf para o servidor


//DATABASE_URL="postgresql://postgres:0000@localhost:5432/rsMalagueta?schema=public"
//postgresql-symmetrical-42473

export { router }// exportar router


