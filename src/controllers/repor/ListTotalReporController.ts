import { getDate } from 'date-fns';
import { Request, Response } from "express";
import { ListTotalReporServices } from "../../services/repor/ListTotalReporServices";

class ListTotalReporController {

    async handle(req: Request, res: Response) {



        const { created_at, created_fn } = req.body

        const reporServices = new ListTotalReporServices();
        const repor = await reporServices.execute({
            created_at,created_fn

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


    }


}

export { ListTotalReporController }