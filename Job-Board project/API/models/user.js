module.exports = (sequelize, DataTypes) =>{

  const User = sequelize.define('user', {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
   user_email: {
     type: DataTypes.STRING,
     allowNull: false 
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false 
     },
     last_name: {
      type: DataTypes.STRING,
      allowNull: false 
     },
    gender: {
      type : DataTypes.ENUM('male', 'female'),
    },
    contact_number: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM('Job Seeker', 'Recruiter'),
      allowNull:false
    }
    
    // Other model options go here
  })
  return User
  ;}