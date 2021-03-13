import Customer from '../models/Customer';
import jwt from 'jsonwebtoken';

class TokenController{
    async store(req, res, novo){

        

        var cpf = '';
        var birth_date = '';

        if(req.cpf == undefined){
            cpf = req.body.cpf;
            birth_date = req.body.birth_date;
        }else{   
         cpf = req.cpf;
         birth_date = req.birth_date;
        }
        
        if(!cpf || !birth_date){
            return res.status(401).json({
                errors: ['Credenciais Inválidas'] 
            });
        }
        
        const customer = await Customer.findOne({ where: { cpf } });

        if(!customer){
            return res.status(401).json({
                errors: ['Usuário não cadastrado'],
            });
        }

        if(!(await customer.birth_dateIsValid(birth_date))){
            console.log(customer.birth_dateIsValid(birth_date));
            return res.status(401).json({
                errors: ['Dados de acesso inválidos'],
            });
        }

        const { id, name, email, phone} = customer;
        const token = jwt.sign({ id, cpf }, process.env.TOKEN_SECRET, { 
            expiresIn: process.env.TOKEN_EXPIRATION,
        });
        
        return res.json({token, id, name, cpf, birth_date, email, phone, new: novo });
    }
}

export default new TokenController();