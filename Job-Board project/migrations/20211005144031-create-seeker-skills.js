'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seeker_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        reference: { model: 'Seeker_profiles', key: 'id' }
      },
      skill_level: {
        type: Sequelize.INTEGER
      },
      skill_id: {
        type: Sequelize.INTEGER,
        reference: { model: 'skill_details', key: 'id' }
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
    await queryInterface.dropTable('seeker_skills');
  }
};