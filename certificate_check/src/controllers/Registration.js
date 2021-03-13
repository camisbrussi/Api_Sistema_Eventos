

import Registration from "../models/Registration";
import Customer from "../models/Customer";
import Event from "../models/Event";

class RegistrationController {
  async show(req, res) {
    try {
      
      const {auth_key} = req.body;
      
      const registration = await Registration.findOne({where:{auth_key}});
    
      
        if(!registration)
        return res.status(400).json({ error: 'Certificado não encontrado'});

        const event = await Event.findByPk(registration.event_id);
        const customer = await Customer.findByPk(registration.customer_id);

        if(registration.status == 0 )
        return res.status(400).json({ error: 'Inscrição foi cancelada'});

        if(registration.status == 1 )
        return res.status(400).json({ error: 'Checkin não foi realizado'});

    
    const certificate = await Registration.findOne( {
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

export default new RegistrationController();
