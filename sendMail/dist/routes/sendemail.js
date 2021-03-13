"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SendMail = require('../controllers/SendMail'); var _SendMail2 = _interopRequireDefault(_SendMail);



const router = new (0, _express.Router)();


router.get('/', _SendMail2.default.store); 



exports. default = router; 