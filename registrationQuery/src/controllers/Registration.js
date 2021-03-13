

import Registration from "../models/Registration";
import Customer from "../models/Customer";
const { QueryTypes } = require('sequelize');

class RegistrationController {
  async show(req, res) {
    try {
      
      const customer_id = req.params.customer_id;
      const customer = await Customer.findByPk(req.params.customer_id);
      

      if(!customer)
        return res.status(400).json({ error: 'Cliente não encontrado'});

    
    const registration = await Registration.findAll( {
        attributes: ['id','auth_key', 'status'],
        where: {customer_id},
        include: { association: 'events'},
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
