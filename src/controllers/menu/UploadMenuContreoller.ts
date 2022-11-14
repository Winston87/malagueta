import { Request, Response } from 'express';
import { UploadMenuServices } from '../../services/menu/UploadMenuServices';
import { Mensege, erros } from '../../exceptions/mensege/MensegeError'
import { DateFormat } from "../../dataFormat/date"


class UploadMenuController {

    async handle(req: Request, res: Response) {

        const menuProduct = new UploadMenuServices();
        const dateFormat = new  DateFormat();
        const date = await dateFormat.data();

        if(!req.file) {

            throw new Mensege(erros.FALHA_SALVA_IMAGEM);

        }else{

            const { originalname, filename: menu_product } = req.file

            const product = await menuProduct.execute({

                menu_product,
                created_at: date
                
            });

            return res.json(product);
        }

        
    }
}
export { UploadMenuController }
