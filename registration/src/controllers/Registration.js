

import Registration from "../models/Registration";
import Event from "../models/Event";
import Customer from "../models/Customer";

class RegistrationController {
  async store(req, res) {
    try {
      const {customer_id,  event_id, auth_key, status} = req.body;
      const customer = await Customer.findByPk(customer_id);
      const event = await Event.findByPk(event_id);
      const exists_registration = await Registration.findOne( {where: {customer_id, event_id, status: 1, status: 2}});


      if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});
      //Verificar se usário já está registrado no evento
      if(exists_registration)
          return res.status(400).json({ error: 'Usuário já inscrito'});
      if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});
      

      await Registration.create({
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

export default new RegistrationController();
