"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);

class RegistrationController {
  async store(req, res) {
    try {
      const {customer_id,  event_id, auth_key, status} = req.body;
      const customer = await _Customer2.default.findByPk(customer_id);
      const event = await _Event2.default.findByPk(event_id);
      const exists_registration = await _Registration2.default.findOne( {where: {customer_id, event_id, status: 1, status: 2}});


      if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});
      //Verificar se usário já está registrado no evento
      if(exists_registration)
          return res.status(400).json({ error: 'Usuário já inscrito'});
      if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});
      

      await _Registration2.default.create({
        customer_id,  
        event_id, 
        auth_key, 
        status
      });

      return res.json({success:'Registrado com sucesso'});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
