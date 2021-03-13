"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);


var _customer = require('./routes/customer'); var _customer2 = _interopRequireDefault(_customer);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);

class App {
  constructor(){
    this.app =_express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({extended: true}));
    this.app.use(_express2.default.json());
  }

  routes(){
    this.app.use('/customers/', _customer2.default);
    this.app.use('/tokens/', _token2.default);

  }
}

exports. default = new App().app;