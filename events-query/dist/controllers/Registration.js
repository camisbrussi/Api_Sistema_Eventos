"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);
const { Op } = require("sequelize");

class RegistrationController {
  async show(req, res) {
    try {
      
      const event_id = req.params.event_id;;
      const event = await _Event2.default.findByPk(event_id);
      

      if(!event)
        return res.status(400).json({ error: 'Evento não existe'});

    
    const registration = await _Registration2.default.findAll( {
        attributes: ['id'],
        where: {event_id, [Op.or]: [{status : 1}, {status: 2}]},
        include: { association: 'customers', attributes: ['cpf', 'name'] },
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
