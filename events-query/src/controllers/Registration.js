

import Registration from "../models/Registration";
import Event from "../models/Event";
const { Op } = require("sequelize");

class RegistrationController {
  async show(req, res) {
    try {
      
      const event_id = req.params.event_id;;
      const event = await Event.findByPk(event_id);
      

      if(!event)
        return res.status(400).json({ error: 'Evento não existe'});

    
    const registration = await Registration.findAll( {
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

export default new RegistrationController();
