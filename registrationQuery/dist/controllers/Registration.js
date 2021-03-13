"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
const { QueryTypes } = require('sequelize');

class RegistrationController {
  async show(req, res) {
    try {
      
      const customer_id = req.params.customer_id;
      const customer = await _Customer2.default.findByPk(req.params.customer_id);
      

      if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});

    
    const registration = await _Registration2.default.findAll( {
        attributes: ['id','auth_key', 'status'],
        where: {customer_id},
        include: { association: 'events'},
      })     

          return res.json({registration});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
