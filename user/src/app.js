import dotenv from 'dotenv';
dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
import studentRoutes from './routes/student';
import photosRoutes from './routes/photo.js';

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
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/students/', studentRoutes)
    this.app.use('/photos/', photosRoutes)
  }
}

export default new App().app;