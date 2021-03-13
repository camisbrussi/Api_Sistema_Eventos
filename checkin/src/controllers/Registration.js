import Registration from "../models/Registration";
import Customer from "../models/Customer";
import Event from "../models/Event";

class RegistrationController {
  async update(req, res) {
    try {
      
      const {registration_id} = req.body;
     
      const registration = await Registration.findByPk(registration_id);

      if(!registration)
        return res.status(400).json({ error: 'Inscrição não encontrada'});


      const event = await Event.findByPk(registration.event_id);
      const customer = await Customer.findByPk(registration.customer_id);


        if(!event)
        return res.status(400).json({ error: 'Evento não encontrado'});

        if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});

        if(registration.status == 2 )
        return res.status(400).json({ error: 'Checkin já realizado'});

        if(registration.status == 0 )
        return res.status(400).json({ error: 'Não é possível fazer checkin, incrição cancelada'});



      const status = 2;
      
      
      await Registration.update({
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

export default new RegistrationController();
