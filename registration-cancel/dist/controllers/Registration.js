"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);
var _Compare = require('../util/Compare'); var Compare = _interopRequireWildcard(_Compare);


class RegistrationController {
  async update(req, res) {
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
        return res.status(400).json({ error: 'Inscrição já está cancelada'});

        if(registration.status == 2 )
        return res.status(400).json({ error: 'Não é possível cancelar após checkin no evento'});


        console.log(Compare.date(event.date))
        if(!Compare.date(event.date))
        return res.status(400).json({ error: 'Não é possível cancelar, prazo de cancelamento: 2 dias antes do evento '}); 
  



      const status = 0;
      
      await _Registration2.default.update({
        status: status
      },{ 
        where: {id : registration_id} 
      });

          return res.json({sucess: 'Inscrição Cancelada'});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
