'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seeker_profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seeker_profiles.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    locationid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seeker_profiles',
  });
  return Seeker_profiles;
};