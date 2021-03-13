import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Events from '../models/Events';

const models = [Events];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
