"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);

class RegistrationController {
  async show(req, res) {
    try {
      
      const {auth_key} = req.body;
      
      const registration = await _Registration2.default.findOne({where:{auth_key}});
    
      
        if(!registration)
        return res.status(400).json({ error: 'Certificado não encontrado'});

        const event = await _Event2.default.findByPk(registration.event_id);
        const customer = await _Customer2.default.findByPk(registration.customer_id);

        if(registration.status == 0 )
        return res.status(400).json({ error: 'Inscrição foi cancelada'});

        if(registration.status == 1 )
        return res.status(400).json({ error: 'Checkin não foi realizado'});

    
    const certificate = await _Registration2.default.findOne( {
        attributes: [],
        where: {id: registration.id},
        include: [{ 
          association: 'events',
          attributes: ['title', 'date'],
        },{
          association: 'customer',
          attributes: ['name'],
        }
      ]
      })     

          return res.json({sucess: 'Certificado Localizado', certificate});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new RegistrationController();
