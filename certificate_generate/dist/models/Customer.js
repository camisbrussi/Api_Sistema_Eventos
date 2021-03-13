"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

const validarCpf = require("validar-cpf");

 class Customer extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        cpf: {
          type: _sequelize2.default.STRING(11),
          defaultValue: '',
          unique: {
            msg: "cpf já cadastrado",
          },
          validate: {
            customValidator(value) {
              if (!validarCpf(value)) {
                throw new Error("CPF inválido");
              }
            },
          },
        },
        birth_date: {
          type: _sequelize2.default.DATEONLY,
          defaultValue: '',
          validate: {
            isDate: {
              msg: "Data Inválida",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          allowNull: true,
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        phone: {
          type: _sequelize2.default.STRING(11),
          allowNull: true,
          validate: {
            len: {
              args: [10, 11],
              msg: "Telefone inválido",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Registration, {
      foreignKey: "customer_id",
      as: "customers",
    });
  }
} exports.default = Customer;

