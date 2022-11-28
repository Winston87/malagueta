import  prismaClient  from '../../prisma';
import { InternalError } from '../../exceptions/users/Execeptions';
import { sign }  from 'jsonwebtoken' // registra e GERA UM TOKEM


interface AuthRequest {

    email: string
    password: string
}

class AuthUserServie {

    async execute({email, password}: AuthRequest) {

        const userExcption = new InternalError();
        await userExcption.executeLogout({email, password})

        const user = await prismaClient.user.findFirst({
            where: {email:email}
        });

        const tokem = sign({// payload

            name: user.name,
            email: user.email
        },
            " "+process.env.JWT_KEY,
            {
                subject: user.id,
                expiresIn: '30d'
            }

        );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            permission_id: user.permission_id,
            tokem: tokem
        }

    }
}

export { AuthUserServie }


