'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        reference: { model: 'Users', key: 'id' }

      },
      date: {
        type: Sequelize.DATE
      },
      message: {
        type: Sequelize.STRING
      },
      exp_name: {
        type: Sequelize.STRING
      },
      job_postid: {
        type: Sequelize.INTEGER,
        reference: { model: 'job_posts', key: 'id' } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('messages');
  }
};