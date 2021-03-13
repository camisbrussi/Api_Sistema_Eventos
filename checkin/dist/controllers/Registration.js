"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);

class RegistrationController {
  async update(req, res) {
    try {
      
      const {registration_id} = req.body;
     
      const registration = await _Registration2.default.findByPk(registration_id);

      if(!registration)
        return res.status(400).json({ error: 'Inscrição não encontrada'});


      const event = await _Event2.default.findByPk(registration.event_id);
      const customer = await _Customer2.default.findByPk(registration.customer_id);


        if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});

        if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});

        if(registration.status == 2 )
        return res.status(400).json({ error: 'Checkin já realizado'});

        if(registration.status == 0 )
        return res.status(400).json({ error: 'Não é possível fazer checkin, incrição cancelada'});



      const status = 2;
      
      
      await _Registration2.default.update({
        status: status,
      },{ 
        where: {id : registration.id} 
      });

          return res.json({success: 'Checkin Realizado', registration: registration.id});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
