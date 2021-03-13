import Customer from "../models/Customer";
import tokenController from '../controllers/Token'

class CustomerController {
  async store(req, res, novo) {
    try {

      const {cpf} = req.body;

      const customer = await Customer.findOne({where:{cpf}});

      if(customer){
        novo = 0
      return tokenController.store(customer, res, novo);
      }

      console.log(customer)

      const newCustomer = await Customer.create(req.body);

      novo = 1
      return tokenController.store(newCustomer, res, novo);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const customers = await Customer.findAll( { attributes: ['id', 'name', 'cpf', 'birth_date', 'email', 'phone'] });
      return res.json(customers);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const customer = await Customer.findByPk(req.params.id);

      const {id, name, cpf, birth_date, email, phone} = customer
      return res.json({id, name, cpf, birth_date, email, phone});
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {  
      const customer = await Customer.findByPk(req.customerId);

      console.log(req);

      if (!customer) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const newdata = await customer.update(req.body);

      return tokenController.store(newdata, res);

    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
 

      const customer = await Customer.findByPk(req.customerId);

      if (!customer) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

     await customer.destroy(req.body);

      return res.json(null);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new CustomerController();
