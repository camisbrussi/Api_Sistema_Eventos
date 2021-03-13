import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Registration from '../models/Registration';
import Event from '../models/Event'
import Customer from '../models/Customer';

const models = [Registration, Event, Customer];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

Registration.associate(connection.models);
Event.associate(connection.models);
Customer.associate(connection.models);

