import Registration from "../models/Registration";
import Customer from "../models/Customer";
import Event from "../models/Event";
import * as Compare from "../util/Compare"


class RegistrationController {
  async update(req, res) {
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
        return res.status(400).json({ error: 'Inscrição já está cancelada'});

        if(registration.status == 2 )
        return res.status(400).json({ error: 'Não é possível cancelar após checkin no evento'});


        console.log(Compare.date(event.date))
        if(!Compare.date(event.date))
        return res.status(400).json({ error: 'Não é possível cancelar, prazo de cancelamento: 2 dias antes do evento '}); 
  



      const status = 0;
      
      await Registration.update({
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

export default new RegistrationController();
