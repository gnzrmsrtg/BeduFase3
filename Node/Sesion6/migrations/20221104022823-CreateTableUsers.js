'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
      firstName: Sequelize.STRING,
      lastName1: Sequelize.STRING,
      lastName2: Sequelize.STRING,
      userRole: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
        }
      },
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
