import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Customer from '../models/Customer';

const models = [Customer];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
