import prismaClient from "../../prisma";

class ListTotalComissionUser {

    async execut() {

        const userCommission = prismaClient.commission.findFirst
    }


}
//terminar
export { ListTotalComissionUser }