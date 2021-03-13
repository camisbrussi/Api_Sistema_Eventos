"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Registration_log = require('../models/Registration_log'); var _Registration_log2 = _interopRequireDefault(_Registration_log);

var _emailConfig = require('../config/emailConfig');


class SendMailController {
  async store(req, res) {
    try {


      const registration_log = await _Registration_log2.default.findOne({where:{mail_send: 0}})
      
      if(!registration_log)
      return res.json(null);

      const registration = await _Registration2.default.findByPk(registration_log.registration_id);
     
      if(!registration)
      return res.status(400).json({ error: 'Inscrição não encontrada'});

      
      const customer = await _Customer2.default.findByPk(registration.customer_id);
      const event = await _Event2.default.findByPk(registration.event_id);

      var action = "";
     
    
      if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});
      
      if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});
      
      if(registration.status == 1){
        action = "Inscrição realizada"
      }
      if(registration.status == 0){
        action = "Inscrição cancelada"
      }
      if(registration.status == 2){
        action = "Presença registrada"
      }
      


        const mailOption = {
          from: process.env.EMAIL_SENDER,
          to: customer.email,
          subject: action,
          text: `${action} no evento: ${event.title}` ,
          };

          
          console.log(_emailConfig.sender)
          
        _emailConfig.sender.sendMail(mailOption, function(error, info){
            if (error) {
              return res.json({error: 'Não foi possível enviar o e-mail'});
            }         
              
          });

          await _Registration_log2.default.update({
            mail_send: 1
          },{ 
            where: {id : registration_log.id} 
          });
          
        

          return res.json({success:'Email enviado com sucesso'});


    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new SendMailController();
