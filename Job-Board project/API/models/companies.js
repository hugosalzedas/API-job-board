module.exports = (sequelize, DataTypes) =>{

  const Companies = sequelize.define('companies', {
    // Model attributes are defined here
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
   etablishment_date: {
     type: DataTypes.DATE,
    },
    company_website_url: {
      type : DataTypes.STRING,
    },
    business_stream_name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  })
  return Companies
  ;}