"use strict";"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable("customers", { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf:{
      type: Sequelize.STRING(11),
      allowNull: false,
      unique: true,
    },
    birth_date:{
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    email:{
      type: Sequelize.STRING,
      allowNull: true,
    },
    phone:{
      type: Sequelize.STRING(11),
      allowNull: true,
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

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable("customers"),
};
