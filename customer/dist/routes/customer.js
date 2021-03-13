"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Customer = require('../controllers/Customer'); var _Customer2 = _interopRequireDefault(_Customer);


var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/:id', _Customer2.default.show); 
router.get('/', _Customer2.default.index); 

router.post('/', _Customer2.default.store); 
router.put('/', _loginRequired2.default, _Customer2.default.update);
router.delete('/', _loginRequired2.default, _Customer2.default.delete);


exports. default = router; 