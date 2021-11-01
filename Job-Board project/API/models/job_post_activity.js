module.exports = (sequelize, DataTypes) =>{

  const Activities = sequelize.define('activities', {
    // Model attributes are defined here
    applydate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  })
  return Activities
  ;}
