"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);



var _registration = require('./routes/registration'); var _registration2 = _interopRequireDefault(_registration);

class App {
  constructor(){
    this.app =_express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(_express2.default.urlencoded({extended: true}));
    this.app.use(_express2.default.json());
  }

  routes(){
    this.app.use('/certificate/check', _registration2.default);

  }
}

exports. default = new App().app;