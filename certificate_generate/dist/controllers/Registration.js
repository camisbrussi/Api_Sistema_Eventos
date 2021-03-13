"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);

class RegistrationController {
  async show(req, res) {
    try {
      
      const {customer_id, registration_id} = req.body;
      const customer = await _Customer2.default.findByPk(customer_id);
      const registration = await _Registration2.default.findByPk(registration_id);
      const event = await _Event2.default.findByPk(registration.event_id);
      

      if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});

        if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});
      
        if(!registration)
        return res.status(400).json({ error: 'Inscrição não encontrada'});

        if(registration.customer_id != customer.id)
        return res.status(400).json({ error: 'Cliente inválido'});

        if(registration.status == 0 )
        return res.status(400).json({ error: 'Inscrição foi cancelada'});

        if(registration.status == 1 )
        return res.status(400).json({ error: 'Checkin não foi realizado'});

    
    const certificate = await _Registration2.default.findOne( {
        attributes: ['auth_key'],
        where: {id: registration_id},
        include: [{ 
          association: 'events',
          attributes: ['title', 'date'],
        },{
          association: 'customer',
          attributes: ['name'],
        }
      ]
      })     


      const auth_key = "r"+registration.id +"c"+ customer.id +"e"+ event.id

    
      await _Registration2.default.update({
        auth_key: auth_key
      },{ 
        where: {id : registration.id} 
      });



          return res.json({certificate});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
