import prismaClient from "../../prisma";

interface CreateCommission {

    user_id?: string
    valor?: number
    total?: number
    commission_id?: string
}

class CreateComissionServices {

    async execute({ valor }: CreateCommission) {

        const idCommission = await prismaClient.valor_commission.findFirst({

            select: {
                id: true
               
            }
        });

        if(!idCommission) {

                await prismaClient.valor_commission.create({

                data: {

                    valor: valor
                },
                select: {
                    valor: true
                }
            });
        }else{

                await prismaClient.valor_commission.update({

                    where: {
                        id: idCommission.id
                    },
                    data: {
                        valor: valor
                    }
                })
        }
       
        

    }

    async executeValor() {
        const valorCommission = await prismaClient.valor_commission.findFirst({
            select: { 
                id: true,
                valor: true
            }
        });
        return valorCommission;
    }

    async createExecute({user_id, valor, total, commission_id}: CreateCommission) {

        create({user_id, valor, total, commission_id });
    }



    

}

async function create({user_id, valor, total, commission_id}: CreateCommission) {

    const commission = await prismaClient.commission.create({

        data: {
            user_id: user_id,
            valor_commission: valor,
            total_commission: total,
            commission_id: commission_id
        },
        select: {
            id: true,
            user_id: true,
            valor_commission: true,
            total_commission: true,
            commission_id: true,
            creatd_at: true
        }
    });

    return commission;

}


export { CreateComissionServices }