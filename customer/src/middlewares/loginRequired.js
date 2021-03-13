import jwt from 'jsonwebtoken';
import Customer from '../models/Customer';

export default async(req, res, next) =>{
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({ 
            errors: ['Login required']
        });
    }

    const [, token] = authorization.split(' ');

    try{
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, cpf} = data;

        const customer = await Customer.findOne({ 
            where: { 
                id, 
                cpf,
            },
        });

        if(!customer){
            return res.status(401).json({ 
                errors: ['Usuário inválido'],
            });
        }


        req.customerId = id;
        req.customercpf = cpf;
        return next();
    }catch(e){
        return res.status(401).json({ 
            errors: ['Tokem expirado ou inválido'],
        });
    }
};