"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable("events", { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    description:{
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date:{
      type: Sequelize.DATE,
      allowNull: false,
    },
    places:{
      type: Sequelize.INTEGER,
      allowNull: true,
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

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable("events"),
};
