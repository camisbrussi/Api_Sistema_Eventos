"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Registration extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        customer_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          references: {
            model: "customers",
            key: "id",
          },
        },
        event_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          references: {
            model: "events",
            key: "id",
          },
        },
        auth_key: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        status: {
          type: _sequelize2.default.INTEGER,
          defaultValue: 1,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "events",
    })
    this.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    })
    this.hasMany(models.Registration_log, {
      foreignKey: "registration_id",
      as: "registration_id",
    });
  }
} exports.default = Registration;