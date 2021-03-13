"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Token = require('../controllers/Token'); var _Token2 = _interopRequireDefault(_Token);

class CustomerController {
  async store(req, res, novo) {
    try {

      const {cpf} = req.body;

      const customer = await _Customer2.default.findOne({where:{cpf}});

      if(customer){
        novo = 0
      return _Token2.default.store(customer, res, novo);
      }

      console.log(customer)

      const newCustomer = await _Customer2.default.create(req.body);

      novo = 1
      return _Token2.default.store(newCustomer, res, novo);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const customers = await _Customer2.default.findAll( { attributes: ['id', 'name', 'cpf', 'birth_date', 'email', 'phone'] });
      return res.json(customers);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const customer = await _Customer2.default.findByPk(req.params.id);

      const {id, name, cpf, birth_date, email, phone} = customer
      return res.json({id, name, cpf, birth_date, email, phone});
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {  
      const customer = await _Customer2.default.findByPk(req.customerId);

      console.log(req);

      if (!customer) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      const newdata = await customer.update(req.body);

      return _Token2.default.store(newdata, res);

    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
 

      const customer = await _Customer2.default.findByPk(req.customerId);

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

exports. default = new CustomerController();
