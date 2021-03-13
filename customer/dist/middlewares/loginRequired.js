"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);

exports. default = async(req, res, next) =>{
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({ 
            errors: ['Login required']
        });
    }

    const [, token] = authorization.split(' ');

    try{
        const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
        const { id, cpf} = data;

        const customer = await _Customer2.default.findOne({ 
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