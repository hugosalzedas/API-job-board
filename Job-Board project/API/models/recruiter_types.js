'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recruiter_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recruiter_types.init({
    business_stream: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recruiter_types',
  });
  return Recruiter_types;
};