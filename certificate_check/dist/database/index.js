"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

var _Registration = require('../models/Registration'); var _Registration2 = _interopRequireDefault(_Registration);
var _Event = require('../models/Event'); var _Event2 = _interopRequireDefault(_Event);
var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);

const models = [_Registration2.default, _Event2.default, _Customer2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));

_Registration2.default.associate(connection.models);
_Event2.default.associate(connection.models);
_Customer2.default.associate(connection.models);

