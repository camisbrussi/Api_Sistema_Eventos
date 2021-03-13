import dotenv from 'dotenv';
dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


import customerRoutes from './routes/customer';
import tokenRoutes from './routes/token';

class App {
  constructor(){
    this.app =express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/customers/', customerRoutes);
    this.app.use('/tokens/', tokenRoutes);

  }
}

export default new App().app;