"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Event extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        description: {
          type: _sequelize2.default.TEXT,
          defaultValue: "",
          len: {
            args: [3, 255],
            msg: "Campo nome deve ter entre 3 e 255 caracteres",
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
        places: {
          type: _sequelize2.default.INTEGER,
          allowNull: true,
        },
        status: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Registration, {
      foreignKey: "event_id",
      as: "events",
    });
  }
} exports.default = Event;
