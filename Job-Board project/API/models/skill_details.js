'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skill_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  skill_details.init({
    skill_detail_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'skill_details',
  });
  return skill_details;
};