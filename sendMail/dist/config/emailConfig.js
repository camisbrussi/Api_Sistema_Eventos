"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _nodemailer = require('nodemailer'); var _nodemailer2 = _interopRequireDefault(_nodemailer);


 const sender = _nodemailer2.default.createTransport({
    
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth:{
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD },
    tls: { rejectUnauthorized: false },
    }); exports.sender = sender;