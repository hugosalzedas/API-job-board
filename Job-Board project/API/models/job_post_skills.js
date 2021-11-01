'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_post_skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  job_post_skills.init({
    skill_level: DataTypes.STRING,
    job_postid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'job_post_skills',
  });
  return job_post_skills;
};