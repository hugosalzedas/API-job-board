'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('job_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posted_by_id: {
        allownull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'users', key: 'id' }
      },
      job_types_id: {
        allownull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'job_types', key: 'id' }
      },
      company_id: {
        allownull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'companies', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      locations_id: {
        allownull: false,
        type: Sequelize.INTEGER,
        reference: { model: 'locations', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('job_posts');
  }
};