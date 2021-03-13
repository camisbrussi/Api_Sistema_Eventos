"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


 class Registration_log extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        registration_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          references: {
            model: "registrations",
            key: "id",
          },
        },
        date: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Data Inválida",
            },
          },
        },
        status: {
          type: _sequelize2.default.INTEGER,
          defaultValue: 1,
        },
        mail_send: {
          type: _sequelize2.default.INTEGER,
          defaultValue: 0,
        },

      },
      {
        timestamps: false,
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Registration, {
        foreignKey: "registration_id",
        as: "registration",
      });
    }
  } exports.default = Registration_log;

