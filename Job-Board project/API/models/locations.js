module.exports = (sequelize, DataTypes) =>{

  const Locations = sequelize.define('locations', {
    // Model attributes are defined here
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
  })
  return Locations
  ;}
