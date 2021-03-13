

import Registration from "../models/Registration";
import Customer from "../models/Customer";
import Event from "../models/Event";

class RegistrationController {
  async show(req, res) {
    try {
      
      const {customer_id, registration_id} = req.body;
      const customer = await Customer.findByPk(customer_id);
      const registration = await Registration.findByPk(registration_id);
      const event = await Event.findByPk(registration.event_id);
      

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

    
    const certificate = await Registration.findOne( {
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

    
      await Registration.update({
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

export default new RegistrationController();
