"use strict";"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable("registrations", { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {         
        model: 'customers',
        key: 'id'
      }
    },
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {        
        model: 'events',
        key: 'id'
      }
    },
    auth_key:{
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    status:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable("registrations"),
};
