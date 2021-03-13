"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Events = require('../controllers/Events'); var _Events2 = _interopRequireDefault(_Events);


const router = new (0, _express.Router)();

router.get('/:id', _Events2.default.show); 
router.get('/', _Events2.default.index);


router.post('/', _Events2.default.store); 
router.put('/:id', _Events2.default.update);
router.delete('/:id', _Events2.default.delete);


exports. default = router; 